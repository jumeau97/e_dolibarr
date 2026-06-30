<?php

namespace App\Entity;

use App\Repository\EntrepotStockRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: EntrepotStockRepository::class)]
class EntrepotStock
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getProduct"])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'entrepotStocks')]
    #[Groups(["getProduct"])]
    private ?Entrepot $entrepot = null;

    #[ORM\ManyToOne(inversedBy: 'entrepotStocks')]
//    #[Groups(["getProduct"])]
    private ?Produit $product = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["getProduct"])]
    private ?int $quantite = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntrepot(): ?Entrepot
    {
        return $this->entrepot;
    }

    public function setEntrepot(?Entrepot $entrepot): static
    {
        $this->entrepot = $entrepot;

        return $this;
    }

    public function getProduct(): ?Produit
    {
        return $this->product;
    }

    public function setProduct(?Produit $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(?int $quantite): static
    {
        $this->quantite = $quantite;

        return $this;
    }
}
