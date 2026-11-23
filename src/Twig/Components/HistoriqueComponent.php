<?php

namespace App\Twig\Components;

use App\Entity\StockMovement;
use App\Payload\Utils\UtilisService;
use App\Repository\StockMovementRepository;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class HistoriqueComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?int $currentPage = 1;
    public ?int $itemPerPage = 15;
    public ?int $totalPage = 0;
    #[LiveProp(writable: true)]
    public string $searchQuery = '';

    #[LiveProp(writable: true)]
    public int $page = 1;

    public function __construct(
        private StockMovementRepository $stockMovementRepository,
        private UtilisService           $utilisService,
        private SerializerInterface     $serializer
    ) {
    }

    public function getHistorique(): array
    {
        $qb = $this->stockMovementRepository->createQueryBuilder('m')
            ->leftJoin('m.produit', 'p')
            ->addSelect('p')
            ->leftJoin('m.entrepotSource', 's')
            ->addSelect('s')
            ->leftJoin('m.entrepotDestination', 'd')
            ->addSelect('d')
            ->orderBy('m.createdAt', 'DESC');

        if (null !== $this->searchQuery && '' !== $this->searchQuery) {
            $qb->andWhere('p.libelle LIKE :search OR p.reference LIKE :search OR s.lieu LIKE :search OR d.lieu LIKE :search')
                ->setParameter('search', '%' . $this->searchQuery . '%');
        }

        $pagination = $this->utilisService->ToPaginate(
            $this->currentPage,
            $this->itemPerPage,
            $qb
        );

        $dataArray = json_decode(
            $this->serializer->serialize($pagination->getItems(), 'json', ["groups" => "getProduct"]),
            true
        );

        return $this->utilisService->paginationResp($dataArray, $pagination, $this->itemPerPage);
    }
}
