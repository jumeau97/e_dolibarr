<?php

namespace App\Service\Product;
use App\Payload\Utils\UtilisService;
use App\Repository\EntrepotRepository;
use App\Repository\ProduitRepository;
use App\Request\Search\SearchEntrepot;

use App\Request\Search\SearchProduct;
use App\Service\Entrepot\EntrepotInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;



class ProductImplement implements ProductInterface
{

    public function __construct(
        private UtilisService   $utilisService,
        private ProduitRepository $produitRepository
    )
    {
    }


    public function findAllByCriteria($pageNumber, $limit, SearchProduct $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->produitRepository->findAllByCriteria($data, $pageNumber, $limit));
    }


}
