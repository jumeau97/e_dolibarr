<?php

namespace App\Controller;

use App\Entity\Entrepot;
use App\Entity\EntrepotStock;
use App\Entity\Produit;
use App\Entity\StockMovement;
use App\Form\CorrectionStockType;
use App\Form\EntrepotFormType;
use App\Form\ProductTypeFormType;
use App\Form\TransfereStockFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route("/product")]
final class ProduitArticleController extends AbstractController
{

    public function __construct(
        private EntityManagerInterface $em
    )
    {
    }

    #[Route('', name: 'app_produit_article')]
    public function index(Request $request): Response
    {
        $formTransfert = $this->createForm(TransfereStockFormType::class);
        $formCorrection = $this->createForm(CorrectionStockType::class);
        $entrepot = new Entrepot();
        $formEntrepot = $this->createForm(EntrepotFormType::class, $entrepot);

        $formEntrepot->handleRequest($request);

        if ($formEntrepot->isSubmitted() && $formEntrepot->isValid()) {
            $data = $formEntrepot->getData();
//           dd($data);
            $entrepot->setPhone($data->getPhone())
                ->setAddress($data->getAddress())
                ->setDescription($data->getDescription())
                ->setLieu($data->getLieu())
                ->setTown($data->getTown())
                ->setStatus($data->getStatus());

            $this->em->persist($entrepot);
            $this->em->flush();
        }

        $formCorrection->handleRequest($request);
        $formTransfert->handleRequest($request);
//        dd($formTransfert->getData());
        if ($formTransfert->isSubmitted() && $formTransfert->isValid()) {
            $data = $formTransfert->getData();

            $produit = $data['product'];
            $source = $data['entrepotSource'];
            $destination = $data['entrepotDestination'];
            $quantite = $data['quantite'];
            $motif = $data['motif'];


            if ($source->getId() === $destination->getId()) {
//                $this->addFlash('error', 'L\'entrepôt de départ et de destination ne peuvent pas être identiques.');
//                return $this->redirectToRoute('app_stock_index');
            }


            $stockSource = $this->em->getRepository(StockMovement::class)->findOneBy(['product' => $produit, 'entrepot' => $source]);

            if (!$stockSource || $stockSource->getQuantite() < $quantite) {
//                $this->addFlash('error', sprintf(
//                    'Stock insuffisant dans %s. Disponible : %d unité(s).',
//                    $source->getLieu(),
//                    $stockSource ? $stockSource->getQuantite() : 0
//                ));
//                return $this->redirectToRoute('app_stock_index');
            }

            // 3. Traitement logistique (Mouvements réels sur les stocks)
            // Soustraction au départ
            $stockSource->setQuantite($stockSource->getQuantite() - $quantite);

            // Ajout à l'arrivée
            $stockDest = $this->em->getRepository(StockMovement::class)->findOneBy(['product' => $produit, 'entrepot' => $destination]);
            if (!$stockDest) {
                $stockDest = new EntrepotStock();
                $stockDest->setProduct($produit);
                $stockDest->setEntrepot($destination);
                $stockDest->setQuantite(0);
                $this->em->persist($stockDest);
            }

            $stockDest->setQuantite($stockDest->getQuantite() + $quantite);

            $stockMvt = new StockMovement();
            $stockMvt->setProduit($produit)
                ->setEntrepotSource($source)
                ->setEntrepotDestination($destination)
                ->setQuantite($quantite)
                ->setMotif($motif)
                ->setTypeMouvement(StockMovement::TYPE_TRANSFERT)
                ->setCreatedAt(new \DateTimeImmutable());

            $this->em->persist($stockMvt);
            $this->em->flush();

        }
        if ($formCorrection->isSubmitted() && $formCorrection->isValid()) {
            $data = $formCorrection->getData();

            $entrepot = $data['entrepot'];
            $product = $data['product'];
            $typeAjustement = $data['typeAjustement']; // 'AJOUT' ou 'RETRAIT'
            $quantite = $data['quantite'];
            $motif = $data['motif'];

            $stock = $this->em->getRepository(EntrepotStock::class)->findOneBy(['product' => $product, 'entrepot' => $entrepot]);

            if (!$stock) {
                $stock = new EntrepotStock();
                $stock->setProduct($product);
                $stock->setEntrepot($entrepot);
                $stock->setQuantite(0);
                $this->em->persist($stock);
            }

            $stockMvt = new StockMovement();
            $stockMvt->setProduit($product)
                ->setEntrepotSource($entrepot)
                ->setMotif($motif)
                ->setQuantite($quantite)
                ->setCreatedAt(new \DateTimeImmutable());

            if ($typeAjustement === 'AJOUT') {
                $stock->setQuantite($stock->getQuantite() + $quantite);

                $stockMvt->setTypeMouvement(StockMovement::TYPE_AJOUT);

//                $this->addFlash('success', sprintf(
//                    'Correction réussie : +%d unité(s) pour "%s" dans l\'entrepôt %s.',
//                    $quantite, $produit->getLibelle(), $entrepot->getLieu()
//                ));
            } else { // RETRAIT

                if ($stock->getQuantite() < $quantite) {
                    return $this->redirectToRoute('app_stock_index');
                }

                $stock->setQuantite($stock->getQuantite() - $quantite);

                $stockMvt->setTypeMouvement(StockMovement::TYPE_RETRAIT);

            }
            $this->em->persist($stockMvt);
            $this->em->flush();
        }
        return $this->render('produit_article/index.html.twig', [
            'formTransfert' => $formTransfert->createView(),
            'formCorrection' => $formCorrection->createView(),
            'formEntrepot' => $formEntrepot->createView()
        ]);
    }


    #[
        Route('/add', name: 'add_product')]
    public function addProduct(Request $request, EntityManagerInterface $entityManager): Response
    {
        $produit = new Produit();

        $entrepotAuto = null;
        // 2. Logique de récupération de l'entrepôt géré
        // if ($user && method_exists($user, 'getEntrepotGere') && $user->getEntrepotGere()) {
        //     $entrepotAuto = $user->getEntrepotGere();
        // }


        // 3. Création du formulaire en passant l'entrepôt ciblé
        $form = $this->createForm(ProductTypeFormType::class, $produit, [
            'entrepot_responsable' => $entrepotAuto
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if ($entrepotAuto) {
                $produit->addEntrepot($entrepotAuto);
            } else {
                $entrepotSelectionne = $form->get('entrepots')->getData();

                if ($entrepotSelectionne) {
                    $produit->addEntrepot($entrepotSelectionne);
                }
            }

            $entityManager->persist($produit);
            $entityManager->flush();

//            $this->addFlash('success', 'Le produit a été enregistré avec succès et affecté à son entrepôt.');
//            return $this->redirectToRoute('app_produit_index');
        }

        return $this->render('produit_article/add-product.html.twig', [
            'form' => $form->createView(),
            'estResponsable' => ($entrepotAuto !== null)
        ]);
    }
}
