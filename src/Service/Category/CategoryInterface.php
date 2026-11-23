<?php

namespace App\Service\Category;


use App\Payload\SearchRequest\SearchCategory;

interface CategoryInterface
{
    public function findAllByCriteria($pageNumber, $limit, ?SearchCategory $data = null);
}
