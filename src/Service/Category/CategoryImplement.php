<?php

namespace App\Service\Category;
use App\Payload\Utils\UtilisService;
use App\Repository\EntrepotRepository;
use App\Repository\ProduitRepository;
use App\Request\Search\SearchEntrepot;

use App\Request\Search\SearchProduct;
use App\Service\Entrepot\EntrepotInterface;
use App\Service\Product\ProductInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;



class CategoryImplement implements CategoryInterface
{

    public function __construct(
        private UtilisService   $utilisService,

    )
    {
    }


//    public function findAllByCriteria($pageNumber, $limit, SearchProduct $data)
//    {
//        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->produitRepository->findAllByCriteria($data, $pageNumber, $limit));
//    }


}
