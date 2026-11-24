<?php

namespace App\Controller;

use App\Repository\CaisseRepository;
use App\Repository\DepenseRepository;
use App\Repository\VenteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/reporting')]
final class ReportingController extends AbstractController
{
    public function __construct(
        private VenteRepository $venteRepository,
        private DepenseRepository $depenseRepository,
        private CaisseRepository $caisseRepository
    ) {
    }

    #[Route('', name: 'app_reporting')]
    public function index(#[CurrentUser] $user): Response
    {
        // Période sélectionnée (par défaut : mois courant)
        $mois = (int) ($_GET['mois'] ?? date('m'));
        $annee = (int) ($_GET['annee'] ?? date('Y'));

        $debutMois = new \DateTimeImmutable(sprintf('%04d-%02d-01', $annee, $mois));
        $finMois = (clone $debutMois)->modify('last day of this month')->setTime(23, 59, 59);

        // Ventes du mois
        $ventesMois = $this->venteRepository->createQueryBuilder('v')
            ->where('v.dateVente BETWEEN :debut AND :fin')
            ->setParameter('debut', $debutMois)
            ->setParameter('fin', $finMois)
            ->orderBy('v.dateVente', 'DESC')
            ->getQuery()
            ->getResult();

        $totalVentesMois = array_reduce($ventesMois, fn($carry, $v) => $carry + ($v->getMontantTTC() ?? 0), 0);

        // Dépenses du mois
        $depensesMois = $this->depenseRepository->findByMonth($annee, $mois);
        $totalDepensesMois = array_reduce($depensesMois, fn($carry, $d) => $carry + ($d->getMontant() ?? 0), 0);

        // Ventes du jour (aujourd'hui)
        $aujourdhui = new \DateTimeImmutable('today 00:00:00');
        $demain = (clone $aujourdhui)->modify('+1 day');

        $ventesJour = $this->venteRepository->createQueryBuilder('v')
            ->where('v.dateVente BETWEEN :debut AND :fin')
            ->setParameter('debut', $aujourdhui)
            ->setParameter('fin', $demain)
            ->getQuery()
            ->getResult();

        $totalVentesJour = array_reduce($ventesJour, fn($carry, $v) => $carry + ($v->getMontantTTC() ?? 0), 0);

        $depensesJour = $this->depenseRepository->findByDay($aujourdhui);
        $totalDepensesJour = array_reduce($depensesJour, fn($carry, $d) => $carry + ($d->getMontant() ?? 0), 0);

        // Solde net
        $soldeNetJour = $totalVentesJour - $totalDepensesJour;
        $soldeNetMois = $totalVentesMois - $totalDepensesMois;

        // Dernières caisses
        $caisses = array_slice($this->caisseRepository->findAllOrdered(), 0, 5);

        return $this->render('reporting/index.html.twig', [
            'mois' => $mois,
            'annee' => $annee,
            'ventesMois' => $ventesMois,
            'totalVentesMois' => $totalVentesMois,
            'depensesMois' => $depensesMois,
            'totalDepensesMois' => $totalDepensesMois,
            'soldeNetMois' => $soldeNetMois,
            'ventesJour' => $ventesJour,
            'totalVentesJour' => $totalVentesJour,
            'depensesJour' => $depensesJour,
            'totalDepensesJour' => $totalDepensesJour,
            'soldeNetJour' => $soldeNetJour,
            'caisses' => $caisses,
        ]);
    }
}
