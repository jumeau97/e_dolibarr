<?php

namespace App\Request\Search;

class SearchEntrepot
{
    public ?string $search = null;

    public function getSearch(): ?string
    {
        return $this->search;
    }

    public function setSearch(?string $search): void
    {
        $this->search = $search;
    }
}
