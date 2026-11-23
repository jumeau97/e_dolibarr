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
    ) {
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
            $entrepot->setPhone($formEntrepot->get('phone')->getData())
                ->setAddress($formEntrepot->get('address')->getData())
                ->setDescription($formEntrepot->get('description')->getData())
                ->setLieu($formEntrepot->get('lieu')->getData())
                ->setTown($formEntrepot->get('town')->getData())
                ->setStatus($formEntrepot->get('status')->getData());

            $this->em->persist($entrepot);
            $this->em->flush();

            $this->addFlash('success', 'L\'entrepôt a été enregistré avec succès.');

            return $this->redirectToRoute('app_produit_article');
        }

        // --- TRANSFERT DE STOCK ---
        $formTransfert->handleRequest($request);
        if ($formTransfert->isSubmitted() && $formTransfert->isValid()) {
            $data = $formTransfert->getData();

            $produit = $data['product'];
            $source = $data['entrepotSource'];
            $destination = $data['entrepotDestination'];
            $quantite = (int) $data['quantite'];
            $motif = $data['motif'];

            if ($source->getId() === $destination->getId()) {
                $this->addFlash('error', 'L\'entrepôt de départ et de destination ne peuvent pas être identiques.');

                return $this->redirectToRoute('app_produit_article');
            }

            $stockSource = $this->em->getRepository(EntrepotStock::class)
                ->findOneBy(['product' => $produit, 'entrepot' => $source]);

            if (!$stockSource || (int) $stockSource->getQuantite() < $quantite) {
                $this->addFlash('error', sprintf(
                    'Stock insuffisant dans %s. Disponible : %d unité(s).',
                    $source->getLieu(),
                    $stockSource ? (int) $stockSource->getQuantite() : 0
                ));

                return $this->redirectToRoute('app_produit_article');
            }

            // Soustraction à la source
            $stockSource->setQuantite((int) $stockSource->getQuantite() - $quantite);

            // Ajout à la destination
            $stockDest = $this->em->getRepository(EntrepotStock::class)
                ->findOneBy(['product' => $produit, 'entrepot' => $destination]);

            if (!$stockDest) {
                $stockDest = new EntrepotStock();
                $stockDest->setProduct($produit);
                $stockDest->setEntrepot($destination);
                $stockDest->setQuantite(0);
                $this->em->persist($stockDest);
            }

            $stockDest->setQuantite((int) $stockDest->getQuantite() + $quantite);

            // Traçabilité du mouvement
            $stockMvt = new StockMovement();
            $stockMvt->setProduit($produit)
                ->setEntrepotSource($source)
                ->setEntrepotDestination($destination)
                ->setUser($this->getUser())
                ->setQuantite($quantite)
                ->setMotif($motif)
                ->setTypeMouvement(StockMovement::TYPE_TRANSFERT)
                ->setCreatedAt(new \DateTimeImmutable());

            $this->em->persist($stockMvt);
            $this->em->flush();

            $this->addFlash('success', sprintf(
                'Transfert de %d unité(s) de "%s" effectué avec succès (%s → %s).',
                $quantite,
                $produit->getLibelle(),
                $source->getLieu(),
                $destination->getLieu()
            ));

            return $this->redirectToRoute('app_produit_article');
        }

        // --- CORRECTION / AJUSTEMENT DE STOCK ---
        $formCorrection->handleRequest($request);
        if ($formCorrection->isSubmitted() && $formCorrection->isValid()) {
            $data = $formCorrection->getData();

            $entrepot = $data['entrepot'];
            $product = $data['product'];
            $typeAjustement = $data['typeAjustement']; // 'AJOUT' ou 'RETRAIT'
            $quantite = (int) $data['quantite'];
            $motif = $data['motif'];

            $stock = $this->em->getRepository(EntrepotStock::class)
                ->findOneBy(['product' => $product, 'entrepot' => $entrepot]);

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
                ->setUser($this->getUser())
                ->setMotif($motif)
                ->setQuantite($quantite)
                ->setCreatedAt(new \DateTimeImmutable());

            if ($typeAjustement === 'AJOUT') {
                $stock->setQuantite((int) $stock->getQuantite() + $quantite);
                $stockMvt->setTypeMouvement(StockMovement::TYPE_AJOUT);

                $this->addFlash('success', sprintf(
                    'Correction réussie : +%d unité(s) pour "%s" dans l\'entrepôt %s.',
                    $quantite,
                    $product->getLibelle(),
                    $entrepot->getLieu()
                ));
            } else { // RETRAIT
                if ((int) $stock->getQuantite() < $quantite) {
                    $this->addFlash('error', sprintf(
                        'Stock insuffisant pour le retrait dans %s. Disponible : %d unité(s).',
                        $entrepot->getLieu(),
                        (int) $stock->getQuantite()
                    ));

                    return $this->redirectToRoute('app_produit_article');
                }

                $stock->setQuantite((int) $stock->getQuantite() - $quantite);
                $stockMvt->setTypeMouvement(StockMovement::TYPE_RETRAIT);

                $this->addFlash('success', sprintf(
                    'Correction réussie : -%d unité(s) pour "%s" dans l\'entrepôt %s.',
                    $quantite,
                    $product->getLibelle(),
                    $entrepot->getLieu()
                ));
            }

            $this->em->persist($stockMvt);
            $this->em->flush();

            return $this->redirectToRoute('app_produit_article');
        }

        return $this->render('produit_article/index.html.twig', [
            'formTransfert' => $formTransfert->createView(),
            'formCorrection' => $formCorrection->createView(),
            'formEntrepot' => $formEntrepot->createView()
        ]);
    }

    #[Route('/add', name: 'add_product')]
    public function addProduct(Request $request, EntityManagerInterface $entityManager): Response
    {
        $produit = new Produit();

        $form = $this->createForm(ProductTypeFormType::class, $produit, [
            'entrepot_responsable' => null,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entrepotSelectionne = $form->get('entrepots')->getData();

            if ($entrepotSelectionne) {
                $produit->addEntrepot($entrepotSelectionne);
            }

            // Créer également l'enregistrement EntrepotStock avec quantité à 0
            if ($entrepotSelectionne) {
                $entrepotStock = new EntrepotStock();
                $entrepotStock->setProduct($produit);
                $entrepotStock->setEntrepot($entrepotSelectionne);
                $entrepotStock->setQuantite(0);
                $entityManager->persist($entrepotStock);
            }

            $entityManager->persist($produit);
            $entityManager->flush();

            $this->addFlash('success', 'Le produit a été enregistré avec succès.');

            return $this->redirectToRoute('add_product');
        }

        return $this->render('produit_article/add-product.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
