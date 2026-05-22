<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class StockMouvementController extends AbstractController
{
    #[Route('/stock/mouvement', name: 'app_stock_mouvement')]
    public function index(): Response
    {
        return $this->render('stock_mouvement/index.html.twig', [
            'controller_name' => 'StockMouvementController',
        ]);
    }
}
