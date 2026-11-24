<?php

namespace App\Entity;

use App\Repository\DepenseRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: DepenseRepository::class)]
#[ORM\Table(name: 'depense')]
class Depense
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getDepense"])]
    private ?int $id = null;

    #[ORM\Column(type: 'decimal', precision: 12, scale: 2)]
    #[Groups(["getDepense"])]
    private ?float $montant = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getDepense"])]
    private ?string $motif = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(["getDepense"])]
    private ?\DateTimeImmutable $dateDepense = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(["getDepense"])]
    private ?string $categorie = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["getDepense"])]
    private ?User $utilisateur = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["getDepense"])]
    private ?string $reference = null;

    public function __construct()
    {
        $this->dateDepense = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(float $montant): static
    {
        $this->montant = $montant;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): static
    {
        $this->motif = $motif;

        return $this;
    }

    public function getDateDepense(): ?\DateTimeImmutable
    {
        return $this->dateDepense;
    }

    public function setDateDepense(\DateTimeImmutable $dateDepense): static
    {
        $this->dateDepense = $dateDepense;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getUtilisateur(): ?User
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?User $utilisateur): static
    {
        $this->utilisateur = $utilisateur;

        return $this;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(?string $reference): static
    {
        $this->reference = $reference;

        return $this;
    }
}
