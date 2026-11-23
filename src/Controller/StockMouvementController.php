<?php

namespace App\Controller;

use App\Entity\StockMovement;
use App\Repository\StockMovementRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/stock/mouvement')]
final class StockMouvementController extends AbstractController
{
    #[Route('', name: 'app_stock_mouvement_index', methods: ['GET'])]
    public function index(Request $request, StockMovementRepository $stockMovementRepository, PaginatorInterface $paginator): Response
    {
        $search = $request->query->get('search', '');

        $qb = $stockMovementRepository->createQueryBuilder('m')
            ->leftJoin('m.produit', 'p')
            ->addSelect('p')
            ->leftJoin('m.entrepotSource', 's')
            ->addSelect('s')
            ->leftJoin('m.entrepotDestination', 'd')
            ->addSelect('d')
            ->leftJoin('m.user', 'u')
            ->addSelect('u')
            ->orderBy('m.createdAt', 'DESC');

        if ('' !== $search) {
            $qb->andWhere('p.libelle LIKE :search OR p.reference LIKE :search OR s.lieu LIKE :search OR d.lieu LIKE :search')
                ->setParameter('search', '%' . $search . '%');
        }

        $pagination = $paginator->paginate(
            $qb,
            $request->query->getInt('page', 1),
            15
        );

        return $this->render('stock_mouvement/index.html.twig', [
            'mouvements' => $pagination,
            'search' => $search,
        ]);
    }
}
