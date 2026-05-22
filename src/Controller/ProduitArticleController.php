<?php

namespace App\Controller;
namespace App\Entity;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ProduitArticleController extends AbstractController
{

    public function __construct(
        private EntityManagerInterface $em
    )
    {
    }

    #[Route('/produit/article', name: 'app_produit_article')]
    public function index(): Response
    {
        return $this->render('produit_article/index.html.twig', [
            'controller_name' => 'ProduitArticleController',
        ]);
    }

    #[Route('/produit/add', name: 'add_product')]
    public function addProduct(Request $request): Response
    {
        $produit = new Produit();

        // 1. Récupérer l'utilisateur connecté
//        $user = $this->getUser();
        $entrepotAuto = null;


//        if ($user && method_exists($user, 'getEntrepotGere') && $user->getEntrepotGere()) {
//            $entrepotAuto = $user->getEntrepotGere();
//        }

        // 3. Création du formulaire en passant l'entrepôt ciblé
        $form = $this->createForm(ProductFormType::class, $produit, [
            'entrepot_responsable' => $entrepotAuto
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($entrepotAuto) {
                $produit->addEntrepot($entrepotAuto);
            }

//            $entityManager->persist($produit);
//            $entityManager->flush();

//            $this->addFlash('success', 'Le produit a été enregistré avec succès.');
//            return $this->redirectToRoute('app_produit_index');
        }

        return $this->render('produit/add.html.twig', [
            'form' => $form->createView(),
            'estResponsable' => ($entrepotAuto !== null)
        ]);
    }
}
