<?php

namespace App\Controller;

use App\Entity\Caisse;
use App\Entity\Depense;
use App\Entity\Vente;
use App\Form\CaisseType;
use App\Form\DepenseType;
use App\Repository\CaisseRepository;
use App\Repository\DepenseRepository;
use App\Repository\VenteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/caisse')]
final class CaisseController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private CaisseRepository $caisseRepository,
        private DepenseRepository $depenseRepository,
        private VenteRepository $venteRepository
    ) {
    }

    #[Route('', name: 'app_caisse')]
    public function index(#[CurrentUser] $user): Response
    {
        $caisseOuverte = $this->caisseRepository->findOneOpen();

        // Statistiques du jour
        $aujourdhui = new \DateTimeImmutable('today 00:00:00');
        $demain = (clone $aujourdhui)->modify('+1 day');

        $ventesDuJour = $this->venteRepository->createQueryBuilder('v')
            ->where('v.dateVente BETWEEN :debut AND :fin')
            ->setParameter('debut', $aujourdhui)
            ->setParameter('fin', $demain)
            ->getQuery()
            ->getResult();

        $depensesDuJour = $this->depenseRepository->findByDay($aujourdhui);

        $totalVentesJour = array_reduce($ventesDuJour, fn($carry, $v) => $carry + ($v->getMontantTTC() ?? 0), 0);
        $totalDepensesJour = array_reduce($depensesDuJour, fn($carry, $d) => $carry + ($d->getMontant() ?? 0), 0);

        // Historique des caisses (dernières 10)
        $caisses = array_slice($this->caisseRepository->findAllOrdered(), 0, 10);

        return $this->render('caisse/index.html.twig', [
            'caisseOuverte' => $caisseOuverte,
            'totalVentesJour' => $totalVentesJour,
            'totalDepensesJour' => $totalDepensesJour,
            'caisses' => $caisses,
            'soldeCaisse' => $caisseOuverte ? ($caisseOuverte->getSoldeFinal() ?? $caisseOuverte->getSoldeInitial()) : 0,
        ]);
    }

    #[Route('/ouvrir', name: 'app_caisse_ouvrir', methods: ['GET', 'POST'])]
    public function ouvrir(Request $request, #[CurrentUser] $user): Response
    {
        // Vérifier qu'aucune caisse n'est déjà ouverte
        $caisseExistante = $this->caisseRepository->findOneOpen();
        if ($caisseExistante) {
            $this->addFlash('warning', 'Une caisse est déjà ouverte.');
            return $this->redirectToRoute('app_caisse');
        }

        if (!$user) {
            $this->addFlash('error', 'Utilisateur non authentifié.');
            return $this->redirectToRoute('app_login');
        }

        $caisse = new Caisse();
        $caisse->setUtilisateur($user);

        $form = $this->createForm(CaisseType::class, $caisse);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($caisse);
            $this->em->flush();

            $this->addFlash('success', 'Caisse ouverte avec succès.');
            return $this->redirectToRoute('app_caisse');
        }

        return $this->render('caisse/ouvrir.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/fermer', name: 'app_caisse_fermer', methods: ['GET', 'POST'])]
    public function fermer(Request $request, #[CurrentUser] $user): Response
    {
        $caisse = $this->caisseRepository->findOneOpen();

        if (!$caisse) {
            $this->addFlash('warning', 'Aucune caisse ouverte à fermer.');
            return $this->redirectToRoute('app_caisse');
        }

        $form = $this->createForm(CaisseType::class, $caisse, [
            'mode_fermeture' => true,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $caisse->setDateFermeture(new \DateTimeImmutable());
            $caisse->setStatut(Caisse::STATUT_FERMEE);
            $caisse->setMotifFermeture($form->get('motifFermeture')->getData());

            $this->em->persist($caisse);
            $this->em->flush();

            $this->addFlash('success', 'Caisse fermée avec succès.');
            return $this->redirectToRoute('app_caisse');
        }

        return $this->render('caisse/fermer.html.twig', [
            'form' => $form->createView(),
            'caisse' => $caisse,
        ]);
    }

    #[Route('/historique', name: 'app_caisse_historique')]
    public function historique(): Response
    {
        $caisses = $this->caisseRepository->findAllOrdered();

        return $this->render('caisse/historique.html.twig', [
            'caisses' => $caisses,
        ]);
    }
}
