<?php

namespace App\Repository;

use App\Entity\Produit;
use App\Request\Search\SearchProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Produit>
 */
class ProduitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Produit::class);
    }

    public function findAllByCriteria(SearchProduct $data, $pageNumber, $limit)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.category', 'c')
            ->addSelect('c')
            ->orderBy('p.id', 'DESC');

        if (null !== $data->getSearch() && '' !== $data->getSearch()) {
            $qb->andWhere('p.libelle LIKE :search OR p.reference LIKE :search OR c.libelle LIKE :search')
                ->setParameter('search', '%' . $data->getSearch() . '%');
        }

        if (true === $data->getIsQuantity()) {
            $qb->andWhere('p.stockPhysique > 0');
        }

        $qb->setFirstResult(($pageNumber - 1) * $limit)
            ->setMaxResults($limit);

        return $qb;
    }
}
