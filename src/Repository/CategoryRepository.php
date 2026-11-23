<?php

namespace App\Repository;

use App\Entity\Category;
use App\Payload\SearchRequest\SearchCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Category>
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function findAllByCriteria(?SearchCategory $data = null, $pageNumber = 1, $limit = 10)
    {
        $qb = $this->createQueryBuilder('c')
            ->orderBy('c.libelle', 'ASC');

        if (null !== $data && null !== $data->getSearch() && '' !== $data->getSearch()) {
            $qb->andWhere('c.libelle LIKE :search')
                ->setParameter('search', '%' . $data->getSearch() . '%');
        }

        $qb->setFirstResult(($pageNumber - 1) * $limit)
            ->setMaxResults($limit);

        return $qb;
    }
}
