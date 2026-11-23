<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Entrepot;
use App\Entity\EntrepotStock;
use App\Entity\Produit;
use App\Entity\StockMovement;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        private UserPasswordHasherInterface $passwordHasher
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        // --- CATÉGORIES ---
        $categories = [];
        $categoryNames = [
            'Matériaux de construction',
            'Outillage',
            'Équipements de protection',
            'Peinture et revêtements',
            'Électricité',
            'Plomberie',
            'Quincaillerie',
            'Prestations & Services',
        ];
        foreach ($categoryNames as $name) {
            $category = new Category();
            $category->setLibelle($name);
            $category->setDescription('Catégorie ' . $name);
            $manager->persist($category);
            $categories[] = $category;
        }
        $manager->flush();

        // --- ENTREPÔTS ---
        $entrepots = [];
        $entrepotData = [
            ['Dépôt Central', 'Bamako', 'Zone industrielle, Rue 15', '+223 20 22 33 44', 'Actif', 'Entrepôt principal de stockage'],
            ['Boutique ACI 2000', 'Bamako', 'ACI 2000, Avenue du Mali', '+223 70 11 22 33', 'Actif', 'Point de vente urbain'],
            ['Dépôt Régional Ségou', 'Ségou', 'Quartier Médine', '+223 75 99 88 77', 'Actif', 'Dépôt de redistribution régionale'],
            ['Dépôt Mopti', 'Mopti', 'Zone portuaire', '+223 76 55 44 33', 'Inactif', 'Dépôt saisonnier'],
        ];
        foreach ($entrepotData as [$lieu, $town, $address, $phone, $status, $description]) {
            $entrepot = new Entrepot();
            $entrepot->setLieu($lieu);
            $entrepot->setTown($town);
            $entrepot->setAddress($address);
            $entrepot->setPhone($phone);
            $entrepot->setStatus($status);
            $entrepot->setDescription($description);
            $manager->persist($entrepot);
            $entrepots[] = $entrepot;
        }
        $manager->flush();

        // --- UTILISATEURS ---
        $users = [];
        $userData = [
            ['admin@edolibarr.ml', 'Admin', 'SYSTEME', 'ROLE_ADMINISTRATEUR', '+223 70 00 00 01', 'Administrateur', 'Direction', 'Niveau 5', true],
            ['formateur@edolibarr.ml', 'Amadou', 'TRAORE', 'ROLE_FORMATEUR', '+223 70 00 00 02', 'Formateur', 'Formation', 'Niveau 4', true],
            ['apprenant@edolibarr.ml', 'Fatoumata', 'DIALLO', 'ROLE_APPRENANT', '+223 70 00 00 03', 'Apprenant', 'Logistique', 'Niveau 2', true],
            ['stock@edolibarr.ml', 'Seydou', 'KEITA', 'ROLE_ADMINISTRATEUR', '+223 70 00 00 04', 'Responsable Stock', 'Logistique', 'Niveau 4', true],
        ];
        foreach ($userData as [$email, $firstName, $lastName, $role, $phone, $profession, $domaine, $niveau, $state]) {
            $user = new User();
            $user->setEmail($email);
            $user->setFirstName($firstName);
            $user->setLastName($lastName);
            $user->setPhoneNumber($phone);
            $user->setProfession($profession);
            $user->setDomaine($domaine);
            $user->setNiveau($niveau);
            $user->setState($state);
            $user->setRoles([$role]);
            $password = $this->passwordHasher->hashPassword($user, 'password123');
            $user->setPassword($password);
            $manager->persist($user);
            $users[] = $user;
        }
        $manager->flush();

        // --- PRODUITS ---
        $produits = [];
        $produitData = [
            ['CIM-50', 'Sac de Ciment 50kg', 10, 100, 2500, 4500, $categories[0], $entrepots[0], 150],
            ['FER-12', 'Fer à béton 12mm (12m)', 5, 50, 3500, 6500, $categories[0], $entrepots[0], 80],
            ['PEINT-BLANC', 'Peinture blanche intérieur 15L', 8, 40, 12000, 18000, $categories[3], $entrepots[0], 30],
            ['CABLE-25', 'Câble électrique 2.5mm (100m)', 10, 60, 8500, 14000, $categories[4], $entrepots[1], 45],
            ['TUYAU-PVC', 'Tuyau PVC 100mm (6m)', 15, 80, 4500, 7500, $categories[5], $entrepots[1], 60],
            ['VIS-ZN', 'Vis zinc 6x60 (boîte 100)', 20, 150, 2500, 4000, $categories[6], $entrepots[1], 200],
            ['EPI-CASQUE', 'Casque de chantier homologué', 5, 30, 6000, 9500, $categories[2], $entrepots[0], 25],
            ['SERV-POSE', 'Pose de carrelage (au m²)', null, null, null, 8500, $categories[7], null, 0],
        ];
        foreach ($produitData as [$ref, $libelle, $limitStock, $stockOptimal, $prixAchat, $prixVente, $category, $entrepot, $stockPhysique]) {
            $produit = new Produit();
            $produit->setReference($ref);
            $produit->setLibelle($libelle);
            $produit->setLimitStock($limitStock);
            $produit->setStockOptimal($stockOptimal);
            $produit->setPrixAchat($prixAchat);
            $produit->setPrixVente($prixVente);
            $produit->setCategory($category);
            $produit->setStockPhysique($stockPhysique);
            if ($entrepot) {
                $produit->addEntrepot($entrepot);
            }
            $manager->persist($produit);
            $produits[] = $produit;
        }
        $manager->flush();

        // --- STOCK PAR ENTREPÔT ---
        $stocks = [
            [$produits[0], $entrepots[0], 150],
            [$produits[1], $entrepots[0], 80],
            [$produits[2], $entrepots[0], 30],
            [$produits[3], $entrepots[1], 45],
            [$produits[4], $entrepots[1], 60],
            [$produits[5], $entrepots[1], 200],
            [$produits[6], $entrepots[0], 25],
            [$produits[0], $entrepots[1], 40],
            [$produits[1], $entrepots[2], 30],
        ];
        foreach ($stocks as [$produit, $entrepot, $quantite]) {
            $stock = new EntrepotStock();
            $stock->setProduct($produit);
            $stock->setEntrepot($entrepot);
            $stock->setQuantite($quantite);
            $manager->persist($stock);
        }
        $manager->flush();

        // --- MOUVEMENTS DE STOCK ---
        $mouvements = [
            [$produits[0], $entrepots[0], null, 'ENTREE_ACHAT', 150, 'Réception fournisseur CIM', $users[3]],
            [$produits[1], $entrepots[0], null, 'ENTREE_ACHAT', 80, 'Réception fournisseur FER', $users[3]],
            [$produits[0], $entrepots[0], $entrepots[1], 'TRANSFERT', 40, 'Transfert vers Boutique ACI', $users[3]],
            [$produits[2], $entrepots[0], null, 'RETRAIT_INVENTAIRE', 5, 'Casse lors de manutention', $users[0]],
            [$produits[3], $entrepots[1], null, 'SORTIE_VENTE', 3, 'Vente comptoir client', $users[1]],
        ];
        foreach ($mouvements as [$produit, $source, $dest, $type, $qte, $motif, $user]) {
            $mvt = new StockMovement();
            $mvt->setProduit($produit);
            $mvt->setEntrepotSource($source);
            $mvt->setEntrepotDestination($dest);
            $mvt->setUser($user);
            $mvt->setQuantite($qte);
            $mvt->setMotif($motif);
            $mvt->setTypeMouvement($type);
            $mvt->setCreatedAt(new \DateTimeImmutable('-' . random_int(1, 30) . ' days'));
            $manager->persist($mvt);
        }
        $manager->flush();
    }
}
