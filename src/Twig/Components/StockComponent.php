<?php

namespace App\Twig\Components;

use App\Payload\Utils\UtilisService;
use App\Request\Search\SearchProduct;
use App\Service\Product\ProductInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class StockComponent
{
    use DefaultActionTrait;
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?int $currentPage = 1;
    public ?int $itemPerPage = 10;
    public ?int $totalPage = 0;
    #[LiveProp(writable: true)]
    public string $searchQuery = '';

    #[LiveProp(writable: true)]
    public int $page = 1;

    public function __construct(
        private ProductInterface   $productInterface,
        private UtilisService       $utilisService,
        private SerializerInterface $serializer
    )
    {
    }

    public function getStockList(): array
    {

//        dd('ooh');
        $search = new SearchProduct();
        $search->setIsQuantity(true);

        $pagination = $this->productInterface->findAllByCriteria(
            $this->currentPage,
            $this->itemPerPage,
            $search
        );

        $dataArray = json_decode(
            $this->serializer->serialize($pagination->getItems(), 'json', ["groups" => "getProduct"]),
            true
        );

        return $this->utilisService->paginationResp($dataArray, $pagination, $this->itemPerPage);


    }
}
