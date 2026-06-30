<?php

namespace App\Entity;

use App\Repository\StockMovementRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StockMovementRepository::class)]
class StockMovement
{
    public const TYPE_TRANSFERT = 'TRANSFERT';
    public const TYPE_AJOUT     = 'AJOUT_INVENTAIRE';
    public const TYPE_RETRAIT   = 'RETRAIT_INVENTAIRE';
    public const TYPE_ENTREE    = 'ENTREE_ACHAT';
    public const TYPE_SORTIE    = 'SORTIE_VENTE';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'stockMovements')]
    private ?Produit $produit = null;

    #[ORM\ManyToOne(inversedBy: 'stockMovements')]
    private ?Entrepot $entrepotSource = null;

    #[ORM\ManyToOne(inversedBy: 'stockMovements')]
    private ?Entrepot $entrepotDestination = null;

    #[ORM\Column(nullable: true)]
    private ?int $quantite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $typeMouvement = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motif = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): static
    {
        $this->produit = $produit;

        return $this;
    }

    public function getEntrepotSource(): ?Entrepot
    {
        return $this->entrepotSource;
    }

    public function setEntrepotSource(?Entrepot $entrepotSource): static
    {
        $this->entrepotSource = $entrepotSource;

        return $this;
    }

    public function getEntrepotDestination(): ?Entrepot
    {
        return $this->entrepotDestination;
    }

    public function setEntrepotDestination(?Entrepot $entrepotDestination): static
    {
        $this->entrepotDestination = $entrepotDestination;

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

    public function getTypeMouvement(): ?string
    {
        return $this->typeMouvement;
    }

    public function setTypeMouvement(?string $typeMouvement): static
    {
        $this->typeMouvement = $typeMouvement;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(?string $motif): static
    {
        $this->motif = $motif;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
