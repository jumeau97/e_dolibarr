<?php

namespace App\Model;

use App\Entity\Chapitre;

class Quiz
{
public ?int $chapitreId=0;

    /**
     * @return int|null
     */
    public function getChapitreId(): ?int
    {
        return $this->chapitreId;
    }

    /**
     * @param int|null $chapitreId
     */
    public function setChapitreId(?int $chapitreId): void
    {
        $this->chapitreId = $chapitreId;
    }
}
