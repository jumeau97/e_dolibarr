<?php

namespace App\Entity;

use App\Repository\VenteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: VenteRepository::class)]
#[ORM\Table(name: 'vente')]
class Vente
{
    public const STATUT_EN_ATTENTE = 'en_attente';
    public const STATUT_VALIDEE = 'validee';
    public const STATUT_ANNULEE = 'annulee';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getVente"])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(["getVente"])]
    private ?string $numero = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(["getVente"])]
    private ?\DateTimeImmutable $dateVente = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Groups(["getVente"])]
    private ?float $montantHT = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2, nullable: true)]
    #[Groups(["getVente"])]
    private ?float $remise = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Groups(["getVente"])]
    private ?float $montantTTC = null;

    #[ORM\Column(length: 50)]
    #[Groups(["getVente"])]
    private ?string $modeReglement = null;

    #[ORM\Column(length: 50)]
    #[Groups(["getVente"])]
    private ?string $statut = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["getVente"])]
    private ?User $utilisateur = null;

    /**
     * @var Collection<int, VenteLigne>
     */
    #[ORM\OneToMany(targetEntity: VenteLigne::class, mappedBy: 'vente', orphanRemoval: true, cascade: ['persist'])]
    #[Groups(["getVente"])]
    private Collection $lignes;

    public function __construct()
    {
        $this->dateVente = new \DateTimeImmutable();
        $this->statut = self::STATUT_EN_ATTENTE;
        $this->lignes = new ArrayCollection();
        $this->montantHT = 0;
        $this->remise = 0;
        $this->montantTTC = 0;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumero(): ?string
    {
        return $this->numero;
    }

    public function setNumero(string $numero): static
    {
        $this->numero = $numero;

        return $this;
    }

    public function getDateVente(): ?\DateTimeImmutable
    {
        return $this->dateVente;
    }

    public function setDateVente(\DateTimeImmutable $dateVente): static
    {
        $this->dateVente = $dateVente;

        return $this;
    }

    public function getMontantHT(): ?float
    {
        return $this->montantHT;
    }

    public function setMontantHT(float $montantHT): static
    {
        $this->montantHT = $montantHT;

        return $this;
    }

    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(float $remise): static
    {
        $this->remise = $remise;

        return $this;
    }

    public function getMontantTTC(): ?float
    {
        return $this->montantTTC;
    }

    public function setMontantTTC(float $montantTTC): static
    {
        $this->montantTTC = $montantTTC;

        return $this;
    }

    public function getModeReglement(): ?string
    {
        return $this->modeReglement;
    }

    public function setModeReglement(string $modeReglement): static
    {
        $this->modeReglement = $modeReglement;

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

    /**
     * @return Collection<int, VenteLigne>
     */
    public function getLignes(): Collection
    {
        return $this->lignes;
    }

    public function addLigne(VenteLigne $ligne): static
    {
        if (!$this->lignes->contains($ligne)) {
            $this->lignes->add($ligne);
            $ligne->setVente($this);
        }

        return $this;
    }

    public function removeLigne(VenteLigne $ligne): static
    {
        if ($this->lignes->removeElement($ligne)) {
            if ($ligne->getVente() === $this) {
                $ligne->setVente(null);
            }
        }

        return $this;
    }

    public function calculerTotaux(): void
    {
        $ht = 0.0;
        foreach ($this->lignes as $ligne) {
            $ht += $ligne->getSousTotal();
        }
        $this->montantHT = $ht;
        $this->montantTTC = $ht - ($this->remise ?? 0);
    }
}
