<?php

namespace App\Entity;

use App\Entity\Category;
use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Attribute\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ProduitRepository::class)]
#[Vich\Uploadable]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getProduct"])]
    private ?int $id = null;
    #[ORM\Column(length: 255,nullable: true)]
    #[Groups(["getProduct"])]
    private ?string $reference = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getProduct"])]
    private ?string $libelle = null;
    #[ORM\Column(nullable: true)]
    #[Groups(["getProduct"])]
    private ?int $limitStock = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["getProduct"])]
    private ?int $stockOptimal = null;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'produits')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(["getProduct"])]
    private ?Category $category = null;

    /**
     * @var Collection<int, Entrepot>
     */
    #[ORM\ManyToMany(targetEntity: Entrepot::class, inversedBy: 'produits')]
    #[Groups(["getProduct"])]
    private Collection $entrepots;

    #[ORM\Column(nullable: true)]
    #[Groups(["getProduct"])]
    private ?float $prixAchat = null;

    #[ORM\Column(nullable: false)]
    #[Groups(["getProduct"])]
    private ?float $prixVente = null;

    /**
     * @var Collection<int, StockMovement>
     */
    #[ORM\OneToMany(targetEntity: StockMovement::class, mappedBy: 'produit')]
    private Collection $stockMovements;

    #[ORM\Column(nullable: true)]
    private ?int $stockPhysique = 0;

    /**
     * @var Collection<int, EntrepotStock>
     */
    #[ORM\OneToMany(targetEntity: EntrepotStock::class, mappedBy: 'product')]
    #[Groups(["getProduct"])]
    private Collection $entrepotStocks;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["getProduct"])]
    private ?string $image = null;

    #[Vich\UploadableField(mapping: 'produit_images', fileNameProperty: 'image')]
    private ?File $imageFile = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $imageUpdatedAt = null;

    public function __construct()
    {
        $this->entrepots = new ArrayCollection();
        $this->stockMovements = new ArrayCollection();
        $this->entrepotStocks = new ArrayCollection();
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

    #[Groups(["getProduct"])]
    public function getStockAlerte(): ?int
    {
        return $this->limitStock;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

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

    public function getPrixAchat(): ?float
    {
        return $this->prixAchat;
    }

    public function setPrixAchat(?float $prixAchat): static
    {
        $this->prixAchat = $prixAchat;

        return $this;
    }

    public function getPrixVente(): ?float
    {
        return $this->prixVente;
    }

    public function setPrixVente(?float $prixVente): static
    {
        $this->prixVente = $prixVente;

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
            $stockMovement->setProduit($this);
        }

        return $this;
    }

    public function removeStockMovement(StockMovement $stockMovement): static
    {
        if ($this->stockMovements->removeElement($stockMovement)) {
            // set the owning side to null (unless already changed)
            if ($stockMovement->getProduit() === $this) {
                $stockMovement->setProduit(null);
            }
        }

        return $this;
    }

    public function getStockPhysique(): ?int
    {
        return $this->stockPhysique;
    }

    public function setStockPhysique(?int $stockPhysique): static
    {
        $this->stockPhysique = $stockPhysique;

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
            $entrepotStock->setProduct($this);
        }

        return $this;
    }

    public function removeEntrepotStock(EntrepotStock $entrepotStock): static
    {
        if ($this->entrepotStocks->removeElement($entrepotStock)) {
            // set the owning side to null (unless already changed)
            if ($entrepotStock->getProduct() === $this) {
                $entrepotStock->setProduct(null);
            }
        }

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            $this->imageUpdatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->imageUpdatedAt;
    }

    public function setImageUpdatedAt(?\DateTimeImmutable $imageUpdatedAt): static
    {
        $this->imageUpdatedAt = $imageUpdatedAt;

        return $this;
    }
}
