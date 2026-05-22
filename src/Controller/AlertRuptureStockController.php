<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AlertRuptureStockController extends AbstractController
{
    #[Route('/alert/rupture/stock', name: 'app_alert_rupture_stock')]
    public function index(): Response
    {
        return $this->render('alert_rupture_stock/index.html.twig', [
            'controller_name' => 'AlertRuptureStockController',
        ]);
    }
}
