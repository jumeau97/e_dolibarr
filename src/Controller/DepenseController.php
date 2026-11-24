<?php

namespace App\Controller;

use App\Entity\Depense;
use App\Form\DepenseType;
use App\Repository\DepenseRepository;
use App\Repository\VenteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/depense')]
final class DepenseController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private DepenseRepository $depenseRepository,
        private VenteRepository $venteRepository
    ) {
    }

    #[Route('', name: 'app_depense_index')]
    public function index(#[CurrentUser] $user): Response
    {
        // Dépenses du jour
        $aujourdhui = new \DateTimeImmutable('today 00:00:00');
        $demain = (clone $aujourdhui)->modify('+1 day');

        $depensesDuJour = $this->depenseRepository->findByDay($aujourdhui);
        $totalDepensesJour = array_reduce($depensesDuJour, fn($carry, $d) => $carry + ($d->getMontant() ?? 0), 0);

        // Toutes les dépenses (dernières 30)
        $depenses = array_slice($this->depenseRepository->findBy([], ['dateDepense' => 'DESC']), 0, 30);

        $totalGeneral = array_reduce($depenses, fn($carry, $d) => $carry + ($d->getMontant() ?? 0), 0);

        return $this->render('depense/index.html.twig', [
            'depensesDuJour' => $depensesDuJour,
            'totalDepensesJour' => $totalDepensesJour,
            'depenses' => $depenses,
            'totalGeneral' => $totalGeneral,
        ]);
    }

    #[Route('/ajouter', name: 'app_depense_ajouter', methods: ['GET', 'POST'])]
    public function ajouter(Request $request, #[CurrentUser] $user): Response
    {
        if (!$user) {
            $this->addFlash('error', 'Utilisateur non authentifié.');
            return $this->redirectToRoute('app_login');
        }

        $depense = new Depense();
        $depense->setUtilisateur($user);

        $form = $this->createForm(DepenseType::class, $depense);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($depense);
            $this->em->flush();

            $this->addFlash('success', 'Dépense enregistrée avec succès.');
            return $this->redirectToRoute('app_depense_index');
        }

        return $this->render('depense/ajouter.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/supprimer/{id}', name: 'app_depense_supprimer', methods: ['POST'])]
    public function supprimer(Request $request, Depense $depense): Response
    {
        if ($this->isCsrfTokenValid('delete_depense_' . $depense->getId(), $request->request->get('_token'))) {
            $this->em->remove($depense);
            $this->em->flush();
            $this->addFlash('success', 'Dépense supprimée.');
        }

        return $this->redirectToRoute('app_depense_index');
    }
}
