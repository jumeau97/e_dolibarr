<?php

namespace App\Service\Category;

use App\Payload\SearchRequest\SearchCategory;
use App\Payload\Utils\UtilisService;
use App\Repository\CategoryRepository;

class CategoryImplement implements CategoryInterface
{

    public function __construct(
        private UtilisService   $utilisService,
        private CategoryRepository $categoryRepository,
    )
    {
    }


    public function findAllByCriteria($pageNumber, $limit, ?SearchCategory $data = null)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->categoryRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
