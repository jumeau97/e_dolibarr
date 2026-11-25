<?php

namespace App\Controller;

use App\Repository\CaisseRepository;
use App\Repository\ProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class VenteController extends AbstractController
{
    public function __construct(
        private ProduitRepository $produitRepository,
        private CaisseRepository $caisseRepository
    ) {
    }

    #[Route('/vente', name: 'app_vente')]
    public function index(): Response
    {
        // Produits disponibles pour la vente (stock physique > 0)
        $produits = $this->produitRepository->createQueryBuilder('p')
            ->where('p.stockPhysique > 0')
            ->orderBy('p.libelle', 'ASC')
            ->setMaxResults(200)
            ->getQuery()
            ->getResult();

        $caisseOuverte = $this->caisseRepository->findOneOpen();

        return $this->render('vente/index.html.twig', [
            'produits' => $produits,
            'caisseOuverte' => $caisseOuverte,
        ]);
    }
}
