<?php
namespace App\Service\Entrepot;

use App\Request\Search\SearchEntrepot;


interface EntrepotInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchEntrepot $data);

    public function sendingEmailTo(array $to, string $subject, ?array $context, string $template): void;

}
