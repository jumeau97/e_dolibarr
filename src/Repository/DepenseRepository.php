<?php

namespace App\Repository;

use App\Entity\Depense;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Depense>
 */
class DepenseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Depense::class);
    }

    public function findByDateRange(\DateTimeImmutable $debut, \DateTimeImmutable $fin): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.dateDepense BETWEEN :debut AND :fin')
            ->setParameter('debut', $debut)
            ->setParameter('fin', $fin)
            ->orderBy('d.dateDepense', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByMonth(int $year, int $month): array
    {
        $debut = new \DateTimeImmutable(sprintf('%04d-%02d-01', $year, $month));
        $fin = (clone $debut)->modify('last day of this month')->setTime(23, 59, 59);

        return $this->findByDateRange($debut, $fin);
    }

    public function findByDay(\DateTimeImmutable $date): array
    {
        $debut = clone $date;
        $debut = $debut->setTime(0, 0, 0);
        $fin = clone $date;
        $fin = $fin->setTime(23, 59, 59);

        return $this->findByDateRange($debut, $fin);
    }
}
