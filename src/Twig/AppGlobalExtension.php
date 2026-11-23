<?php

namespace App\Twig;

use App\Repository\CategoryRepository;
use Twig\Extension\AbstractExtension;

class AppGlobalExtension extends AbstractExtension
{
    public function __construct(
        private CategoryRepository $categoryRepository
    ) {
    }

    public function getGlobals(): array
    {
        try {
            return [
                'categories' => $this->categoryRepository->findBy([], ['libelle' => 'ASC']),
            ];
        } catch (\Exception $e) {
            // Base de données non initialisée ou table absente : retourne une liste vide
            return [
                'categories' => [],
            ];
        }
    }
}
