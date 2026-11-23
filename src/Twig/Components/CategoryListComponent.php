<?php

namespace App\Twig\Components;


use App\Payload\SearchRequest\SearchCategory;
use App\Payload\Utils\UtilisService;
use App\Service\Category\CategoryInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class CategoryListComponent
{
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
        private CategoryInterface   $categoryInterface,
        private UtilisService       $utilisService,
        private SerializerInterface $serializer
    ) {
    }

    public function getPagedData(): array
    {
        $search = new SearchCategory();
        $search->setSearch($this->searchQuery);

        $pagination = $this->categoryInterface->findAllByCriteria(
            $this->currentPage,
            $this->itemPerPage,
            $search
        );

        $dataArray = json_decode(
            $this->serializer->serialize($pagination->getItems(), 'json', ["groups" => "getCategory"]),
            true
        );

        return $this->utilisService->paginationResp($dataArray, $pagination, $this->itemPerPage);
    }
}
