<?php

namespace App\Entity;

use App\Repository\EntrepotRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: EntrepotRepository::class)]
class Entrepot
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getEntrepot", "getProduct"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getEntrepot", "getProduct"])]
    private ?string $lieu = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["getEntrepot", "getProduct"])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getEntrepot","getProduct"])]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getEntrepot", "getProduct"])]
    private ?string $town = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getEntrepot", "getProduct"])]
    private ?string $phone = null;


    /**
     * @var Collection<int, Produit>
     */
    #[ORM\ManyToMany(targetEntity: Produit::class, mappedBy: 'entrepots')]
    #[Groups(["getEntrepot"])]
    private Collection $produits;

    /**
     * @var Collection<int, StockMovement>
     */
    #[ORM\OneToMany(targetEntity: StockMovement::class, mappedBy: 'entrepotSource')]
    private Collection $stockMovements;

    /**
     * @var Collection<int, EntrepotStock>
     */
    #[ORM\OneToMany(targetEntity: EntrepotStock::class, mappedBy: 'entrepot')]
    private Collection $entrepotStocks;

    #[ORM\Column(length: 255)]
    #[Groups(["getEntrepot", "getProduct"])]
    private ?string $status = null;

    public function __construct()
    {
        $this->produits = new ArrayCollection();
        $this->stockMovements = new ArrayCollection();
        $this->entrepotStocks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(string $lieu): static
    {
        $this->lieu = $lieu;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getTown(): ?string
    {
        return $this->town;
    }

    public function setTown(string $town): static
    {
        $this->town = $town;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * @return Collection<int, Produit>
     */
    public function getProduits(): Collection
    {
        return $this->produits;
    }

    public function addProduit(Produit $produit): static
    {
        if (!$this->produits->contains($produit)) {
            $this->produits->add($produit);
            $produit->addEntrepot($this);
        }

        return $this;
    }

    public function removeProduit(Produit $produit): static
    {
        if ($this->produits->removeElement($produit)) {
            $produit->removeEntrepot($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, StockMovement>
     */
    public function getStockMovements(): Collection
    {
        return $this->stockMovements;
    }

    public function addStockMovement(StockMovement $stockMovement): static
    {
        if (!$this->stockMovements->contains($stockMovement)) {
            $this->stockMovements->add($stockMovement);
            $stockMovement->setEntrepotSource($this);
        }

        return $this;
    }

    public function removeStockMovement(StockMovement $stockMovement): static
    {
        if ($this->stockMovements->removeElement($stockMovement)) {
            // set the owning side to null (unless already changed)
            if ($stockMovement->getEntrepotSource() === $this) {
                $stockMovement->setEntrepotSource(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, EntrepotStock>
     */
    public function getEntrepotStocks(): Collection
    {
        return $this->entrepotStocks;
    }

    public function addEntrepotStock(EntrepotStock $entrepotStock): static
    {
        if (!$this->entrepotStocks->contains($entrepotStock)) {
            $this->entrepotStocks->add($entrepotStock);
            $entrepotStock->setEntrepot($this);
        }

        return $this;
    }

    public function removeEntrepotStock(EntrepotStock $entrepotStock): static
    {
        if ($this->entrepotStocks->removeElement($entrepotStock)) {
            // set the owning side to null (unless already changed)
            if ($entrepotStock->getEntrepot() === $this) {
                $entrepotStock->setEntrepot(null);
            }
        }

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }
}
