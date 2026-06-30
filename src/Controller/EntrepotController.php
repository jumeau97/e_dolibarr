<?php

namespace App\Controller;

use App\Entity\Entrepot;
use App\Form\EntrepotFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route("/entrepot")]
final class EntrepotController extends AbstractController
{
    #[Route('', name: 'app_entrepot')]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $entrepot = new Entrepot();
        $form = $this->createForm(EntrepotFormType::class, $entrepot);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

//            dd($form->getData());

            $em->persist($entrepot);
            $em->flush();
//

            return $this->redirectToRoute('app_entrepot');
        }
        return $this->render('entrepot/index.html.twig', [
            'controller_name' => 'EntrepotController',
            'form' => $form->createView()
        ]);
    }

    #[Route('/details/{id}', name: 'details_entrepot')]
    public function details(Entrepot $entrepot): Response
    {
        $produits = $entrepot->getProduits();
        return $this->render('entrepot/details.html.twig', [
            'produits' => $produits,
            'entrepot' => $entrepot
        ]);
    }
}
