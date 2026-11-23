<?php

namespace App\Twig\Components;

use App\Payload\Utils\UtilisService;
use App\Request\Search\SearchUser;
use App\Service\Utilisateur\UserInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class UserComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?int $currentPage = 1;
    public ?int $itemPerPage = 10;
    public ?int $totalPage = 0;
    #[LiveProp(writable: true)]
    public string $searchQuery = '';
    #[LiveProp(writable: true)]
    public array $roles = [];

    #[LiveProp(writable: true)]
    public int $page = 1;

    public function __construct(
        private UserInterface   $userInterface,
        private UtilisService       $utilisService,
        private SerializerInterface $serializer
    ) {
    }

    public function getPagedData(): array
    {
        $search = new SearchUser();
        $search->setSearch($this->searchQuery);
        $search->setRoles($this->roles);

        $pagination = $this->userInterface->findAllByCriteria(
            $this->currentPage,
            $this->itemPerPage,
            $search
        );

        $dataArray = json_decode(
            $this->serializer->serialize($pagination->getItems(), 'json', ["groups" => "getUsers"]),
            true
        );

        return $this->utilisService->paginationResp($dataArray, $pagination, $this->itemPerPage);
    }
}
