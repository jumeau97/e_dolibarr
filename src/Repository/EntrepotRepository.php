<?php

namespace App\Repository;

use App\Entity\Entrepot;
use App\Request\Search\SearchEntrepot;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Entrepot>
 */
class EntrepotRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Entrepot::class);
    }

    public function findAllByCriteria(SearchEntrepot $data, $pageNumber, $limit)
    {
        $qb = $this->createQueryBuilder('e')
            ->orderBy('e.lieu', 'ASC');

        if (null !== $data->getSearch() && '' !== $data->getSearch()) {
            $qb->andWhere('e.lieu LIKE :search OR e.address LIKE :search OR e.town LIKE :search OR e.description LIKE :search')
                ->setParameter('search', '%' . $data->getSearch() . '%');
        }

        $qb->setFirstResult(($pageNumber - 1) * $limit)
            ->setMaxResults($limit);

        return $qb;
    }
}
