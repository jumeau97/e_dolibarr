<?php

namespace App\Controller;

use App\Repository\EntrepotRepository;
use App\Repository\ProduitRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/dashboard')]
final class DashboardController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ProduitRepository $produitRepository,
        private EntrepotRepository $entrepotRepository,
        private UserRepository $userRepository
    ) {
    }

    #[Route('', name: 'app_dashboard')]
    public function index(): Response
    {
        // Produits en alerte de rupture (stock physique <= limite)
        $produitsAlerte = $this->em->createQueryBuilder('p')
            ->select('COUNT(p.id)')
            ->where('p.stockPhysique <= p.limitStock')
            ->andWhere('p.limitStock IS NOT NULL')
            ->getQuery()
            ->getSingleScalarResult();

        // Total produits
        $totalProduits = $this->produitRepository->count([]);

        // Total entrepôts
        $totalEntrepots = $this->entrepotRepository->count([]);

        // Total utilisateurs actifs
        $totalUtilisateurs = $this->em->createQueryBuilder('u')
            ->select('COUNT(u.id)')
            ->where('u.state = :state')
            ->setParameter('state', true)
            ->getQuery()
            ->getSingleScalarResult();

        // Valeur totale du stock (stock physique * prix de vente)
        $valeurStock = $this->em->createQueryBuilder('p')
            ->select('SUM(p.stockPhysique * p.prixVente)')
            ->where('p.stockPhysique IS NOT NULL')
            ->andWhere('p.prixVente IS NOT NULL')
            ->getQuery()
            ->getSingleScalarResult() ?: 0;

        // Produits les plus en stock
        $produitsStock = $this->produitRepository->findBy([], ['stockPhysique' => 'DESC'], 5);

        // Mouvements récents
        $mouvementsRecents = $this->em->createQueryBuilder('m')
            ->select('m')
            ->join('m.produit', 'p')
            ->addSelect('p')
            ->orderBy('m.createdAt', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $this->render('home/index.html.twig', [
            'produitsAlerte' => (int) $produitsAlerte,
            'totalProduits' => (int) $totalProduits,
            'totalEntrepots' => (int) $totalEntrepots,
            'totalUtilisateurs' => (int) $totalUtilisateurs,
            'valeurStock' => (float) $valeurStock,
            'produitsStock' => $produitsStock,
            'mouvementsRecents' => $mouvementsRecents,
        ]);
    }
}
