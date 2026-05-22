<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProduitRepository::class)]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $reference = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(nullable: true)]
    private ?int $limitStock = null;

    #[ORM\Column(nullable: true)]
    private ?int $stockOptimal = null;

    /**
     * @var Collection<int, Entrepot>
     */
    #[ORM\ManyToMany(targetEntity: Entrepot::class, inversedBy: 'produits')]
    private Collection $entrepots;

    public function __construct()
    {
        $this->entrepots = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(string $reference): static
    {
        $this->reference = $reference;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): static
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getLimitStock(): ?int
    {
        return $this->limitStock;
    }

    public function setLimitStock(?int $limitStock): static
    {
        $this->limitStock = $limitStock;

        return $this;
    }

    public function getStockOptimal(): ?int
    {
        return $this->stockOptimal;
    }

    public function setStockOptimal(?int $stockOptimal): static
    {
        $this->stockOptimal = $stockOptimal;

        return $this;
    }

    /**
     * @return Collection<int, Entrepot>
     */
    public function getEntrepots(): Collection
    {
        return $this->entrepots;
    }

    public function addEntrepot(Entrepot $entrepot): static
    {
        if (!$this->entrepots->contains($entrepot)) {
            $this->entrepots->add($entrepot);
        }

        return $this;
    }

    public function removeEntrepot(Entrepot $entrepot): static
    {
        $this->entrepots->removeElement($entrepot);

        return $this;
    }
}
