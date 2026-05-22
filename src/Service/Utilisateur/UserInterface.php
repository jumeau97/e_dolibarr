<?php

namespace App\Service\Utilisateur;



use App\Request\Search\SearchUser;

interface UserInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchUser $data);
    public function sendingEmailTo(array $to, string $subject, ?array $context, string $template):void;

}
