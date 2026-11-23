<?php

namespace App\Controller;

use App\Entity\Vente;
use App\Entity\VenteLigne;
use App\Entity\Produit;
use App\Repository\ProduitRepository;
use App\Payload\Utils\GlobalResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/vente/api')]
final class VenteApiController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ProduitRepository $produitRepository
    ) {
    }

    #[Route('/produits', name: 'api_vente_produits', methods: ['GET'])]
    public function produits(): JsonResponse
    {
        $produits = $this->produitRepository->createQueryBuilder('p')
            ->where('p.stockPhysique > 0')
            ->orderBy('p.libelle', 'ASC')
            ->setMaxResults(200)
            ->getQuery()
            ->getResult();

        $data = [];
        foreach ($produits as $produit) {
            $data[] = [
                'id' => $produit->getId(),
                'reference' => $produit->getReference(),
                'libelle' => $produit->getLibelle(),
                'prixVente' => (float) $produit->getPrixVente(),
                'stockPhysique' => (int) $produit->getStockPhysique(),
                'limitStock' => $produit->getLimitStock(),
            ];
        }

        return GlobalResponse::successWith('Produits disponibles', $data);
    }

    #[Route('/valider', name: 'api_vente_valider', methods: ['POST'])]
    public function valider(Request $request, #[CurrentUser] $user): JsonResponse
    {
        if (!$user) {
            return GlobalResponse::error('Utilisateur non authentifié', 401);
        }

        $data = json_decode($request->getContent(), true);

        if (!isset($data['lignes']) || !is_array($data['lignes']) || count($data['lignes']) === 0) {
            return GlobalResponse::error('Aucun article dans le panier', 400);
        }

        $montantHT = 0.0;
        $lignesData = [];

        foreach ($data['lignes'] as $ligneData) {
            $produitId = $ligneData['produit_id'] ?? null;
            $quantite = (int) ($ligneData['quantite'] ?? 0);

            if (!$produitId || $quantite <= 0) {
                continue;
            }

            $produit = $this->em->getRepository(Produit::class)->find($produitId);
            if (!$produit) {
                continue;
            }

            if ((int) $produit->getStockPhysique() < $quantite) {
                return GlobalResponse::error(
                    sprintf('Stock insuffisant pour %s. Disponible : %d', $produit->getLibelle(), (int) $produit->getStockPhysique()),
                    400
                );
            }

            $prixUnitaire = (float) $produit->getPrixVente();
            $sousTotal = $prixUnitaire * $quantite;
            $montantHT += $sousTotal;

            $lignesData[] = [
                'produit' => $produit,
                'quantite' => $quantite,
                'prixUnitaire' => $prixUnitaire,
                'sousTotal' => $sousTotal,
            ];
        }

        $remise = (float) ($data['remise'] ?? 0);
        $modeReglement = $data['mode_reglement'] ?? 'Especes';
        $montantTTC = $montantHT - $remise;

        // Générer un numéro de vente
        $annee = (new \DateTimeImmutable())->format('Y');
        $derniereVente = $this->em->getRepository(Vente::class)
            ->createQueryBuilder('v')
            ->where('v.numero LIKE :prefix')
            ->setParameter('prefix', 'VTE-' . $annee . '-%')
            ->orderBy('v.numero', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        $numero = 'VTE-' . $annee . '-' . str_pad((($derniereVente ? (int) substr($derniereVente->getNumero(), -4) : 0) + 1), 4, '0', STR_PAD_LEFT);

        // Créer la vente
        $vente = new Vente();
        $vente->setNumero($numero);
        $vente->setMontantHT($montantHT);
        $vente->setRemise($remise);
        $vente->setMontantTTC($montantTTC);
        $vente->setModeReglement($modeReglement);
        $vente->setStatut(Vente::STATUT_VALIDEE);
        $vente->setUtilisateur($user);

        // Créer les lignes et mettre à jour le stock
        foreach ($lignesData as $ligneData) {
            $ligne = new VenteLigne();
            $ligne->setProduit($ligneData['produit']);
            $ligne->setQuantite($ligneData['quantite']);
            $ligne->setPrixUnitaire($ligneData['prixUnitaire']);
            $ligne->setSousTotal($ligneData['sousTotal']);
            $ligne->calculerSousTotal();

            $vente->addLigne($ligne);

            // Réduire le stock physique
            $produit = $ligneData['produit'];
            $produit->setStockPhysique((int) $produit->getStockPhysique() - $ligneData['quantite']);

            // Créer un mouvement de stock sortie
            $mouvement = new \App\Entity\StockMovement();
            $mouvement->setProduit($produit);
            $mouvement->setEntrepotSource(null);
            $mouvement->setEntrepotDestination(null);
            $mouvement->setUser($user);
            $mouvement->setQuantite($ligneData['quantite']);
            $mouvement->setTypeMouvement(\App\Entity\StockMovement::TYPE_SORTIE);
            $mouvement->setMotif('Vente n°' . $numero);
            $mouvement->setCreatedAt(new \DateTimeImmutable());

            $this->em->persist($mouvement);
        }

        $this->em->persist($vente);
        $this->em->flush();

        return GlobalResponse::successWith('Vente enregistrée avec succès', [
            'numero' => $vente->getNumero(),
            'montantTTC' => $vente->getMontantTTC(),
            'id' => $vente->getId(),
        ]);
    }
}
