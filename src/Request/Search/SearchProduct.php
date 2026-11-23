<?php

namespace App\Request\Search;

class SearchProduct
{
    public ?bool $isQuantity = false;
    public ?string $search = null;

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

    public function getSearch(): ?string
    {
        return $this->search;
    }

    public function setSearch(?string $search): void
    {
        $this->search = $search;
    }
}
