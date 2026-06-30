<?php

namespace App\Request\Search;

class SearchProduct
{
    public ?bool $isQuantity=false;

    /**
     * @return bool|null
     */
    public function getIsQuantity(): ?bool
    {
        return $this->isQuantity;
    }

    /**
     * @param bool|null $isQuantity
     */
    public function setIsQuantity(?bool $isQuantity): void
    {
        $this->isQuantity = $isQuantity;
    }




}
