<?php

namespace App\Entity;

use App\Repository\CaisseRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: CaisseRepository::class)]
#[ORM\Table(name: 'caisse')]
class Caisse
{
    public const STATUT_OUVERTE = 'ouverte';
    public const STATUT_FERMEE = 'fermee';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getCaisse"])]
    private ?int $id = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(["getCaisse"])]
    private ?\DateTimeImmutable $dateOuverture = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Groups(["getCaisse"])]
    private ?\DateTimeImmutable $dateFermeture = null;

    #[ORM\Column(type: 'decimal', precision: 12, scale: 2)]
    #[Groups(["getCaisse"])]
    private ?float $soldeInitial = null;

    #[ORM\Column(type: 'decimal', precision: 12, scale: 2, nullable: true)]
    #[Groups(["getCaisse"])]
    private ?float $soldeFinal = null;

    #[ORM\Column(length: 20)]
    #[Groups(["getCaisse"])]
    private ?string $statut = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["getCaisse"])]
    private ?User $utilisateur = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["getCaisse"])]
    private ?string $motifFermeture = null;

    public function __construct()
    {
        $this->dateOuverture = new \DateTimeImmutable();
        $this->statut = self::STATUT_OUVERTE;
        $this->soldeInitial = 0.0;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateOuverture(): ?\DateTimeImmutable
    {
        return $this->dateOuverture;
    }

    public function setDateOuverture(\DateTimeImmutable $dateOuverture): static
    {
        $this->dateOuverture = $dateOuverture;

        return $this;
    }

    public function getDateFermeture(): ?\DateTimeImmutable
    {
        return $this->dateFermeture;
    }

    public function setDateFermeture(?\DateTimeImmutable $dateFermeture): static
    {
        $this->dateFermeture = $dateFermeture;

        return $this;
    }

    public function getSoldeInitial(): ?float
    {
        return $this->soldeInitial;
    }

    public function setSoldeInitial(float $soldeInitial): static
    {
        $this->soldeInitial = $soldeInitial;

        return $this;
    }

    public function getSoldeFinal(): ?float
    {
        return $this->soldeFinal;
    }

    public function setSoldeFinal(?float $soldeFinal): static
    {
        $this->soldeFinal = $soldeFinal;

        return $this;
    }

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(string $statut): static
    {
        $this->statut = $statut;

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

    public function getMotifFermeture(): ?string
    {
        return $this->motifFermeture;
    }

    public function setMotifFermeture(?string $motifFermeture): static
    {
        $this->motifFermeture = $motifFermeture;

        return $this;
    }

    public function isOuverte(): bool
    {
        return $this->statut === self::STATUT_OUVERTE;
    }

    public function isFermee(): bool
    {
        return $this->statut === self::STATUT_FERMEE;
    }
}
