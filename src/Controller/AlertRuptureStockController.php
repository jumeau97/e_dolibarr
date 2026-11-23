<?php

namespace App\Controller;

use App\Repository\ProduitRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/alert/rupture/stock')]
final class AlertRuptureStockController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ProduitRepository $produitRepository
    ) {
    }

    #[Route('', name: 'app_alert_rupture_stock')]
    public function index(ProduitRepository $produitRepository): Response
    {
        // Produits dont le stock physique est <= à la limite (alerte)
        $alertes = $produitRepository->createQueryBuilder('p')
            ->where('p.stockPhysique <= p.limitStock')
            ->andWhere('p.limitStock IS NOT NULL')
            ->orderBy('p.stockPhysique', 'ASC')
            ->getQuery()
            ->getResult();

        // Produits en stock normal (pour info)
        $stocksOk = $produitRepository->createQueryBuilder('p')
            ->where('p.stockPhysique > p.limitStock')
            ->andWhere('p.limitStock IS NOT NULL')
            ->getQuery()
            ->getResult();

        // Produits sans limite définie
        $sansLimite = $produitRepository->createQueryBuilder('p')
            ->where('p.limitStock IS NULL')
            ->getQuery()
            ->getResult();

        return $this->render('alert_rupture_stock/index.html.twig', [
            'alertes' => $alertes,
            'stocksOk' => $stocksOk,
            'sansLimite' => $sansLimite,
        ]);
    }
}
