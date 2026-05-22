<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PredpredictionVenteController extends AbstractController
{
    #[Route('/predprediction/vente', name: 'app_predprediction_vente')]
    public function index(): Response
    {
        return $this->render('predprediction_vente/index.html.twig', [
            'controller_name' => 'PredpredictionVenteController',
        ]);
    }
}
