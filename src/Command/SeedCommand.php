<?php

namespace App\Command;

use App\Entity\Category;
use App\Entity\Entrepot;
use App\Entity\EntrepotStock;
use App\Entity\Produit;
use App\Entity\StockMovement;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:seed',
    description: 'Peuple la base de données avec des données de test',
)]
class SeedCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $em,
        private UserPasswordHasherInterface $passwordHasher
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Seed des données de test');

        // Supprimer les données existantes
        $this->em->getConnection()->executeStatement('SET FOREIGN_KEY_CHECKS=0');
        $this->em->getConnection()->executeStatement('DELETE FROM stock_movement');
        $this->em->getConnection()->executeStatement('DELETE FROM entrepot_stock');
        $this->em->getConnection()->executeStatement('DELETE FROM produit_entrepot');
        $this->em->getConnection()->executeStatement('DELETE FROM produit');
        $this->em->getConnection()->executeStatement('DELETE FROM category');
        $this->em->getConnection()->executeStatement('DELETE FROM entrepot');
        $this->em->getConnection()->executeStatement('DELETE FROM `user`');
        $this->em->getConnection()->executeStatement('SET FOREIGN_KEY_CHECKS=1');

        // 1. Catégories
        $categories = [];
        $catData = [
            ['Électroménager', 'Appareils électroménagers et petits équipements'],
            ['Informatique', 'Ordinateurs, accessoires et matériel informatique'],
            ['Bureautique', 'Fournitures de bureau et matériel de bureau'],
            ['Téléphonie', 'Téléphones, tablettes et accessoires mobiles'],
            ['Alimentation', 'Produits alimentaires et boissons'],
        ];

        foreach ($catData as [$libelle, $description]) {
            $category = new Category();
            $category->setLibelle($libelle);
            $category->setDescription($description);
            $this->em->persist($category);
            $categories[] = $category;
        }
        $this->em->flush();
        $io->success(sprintf('Catégories créées : %d', count($categories)));

        // 2. Entrepôts
        $entrepots = [];
        $entrepotData = [
            ['Dépôt Central', 'Entrepôt principal de stockage', 'Zone industrielle, Rue du Commerce 123', 'Bamako', '+223 20 22 33 44', 'Actif'],
            ['Boutique Centre-Ville', 'Point de vente en centre-ville', 'Avenue de la République 45', 'Bamako', '+223 70 11 22 33', 'Actif'],
            ['Dépôt Nord', 'Dépôt de stockage secondaire', 'Quartier Badalabougou, Rue 789', 'Bamako', '+223 66 55 44 33', 'Actif'],
        ];

        foreach ($entrepotData as [$lieu, $desc, $address, $town, $phone, $status]) {
            $entrepot = new Entrepot();
            $entrepot->setLieu($lieu);
            $entrepot->setDescription($desc);
            $entrepot->setAddress($address);
            $entrepot->setTown($town);
            $entrepot->setPhone($phone);
            $entrepot->setStatus($status);
            $this->em->persist($entrepot);
            $entrepots[] = $entrepot;
        }
        $this->em->flush();
        $io->success(sprintf('Entrepôts créés : %d', count($entrepots)));

        // 3. Produits
        $produits = [];
        $produitData = [
            ['REF-001', 'Ordinateur Portable Dell Latitude', 1, 450000, 500000, 10, 5],
            ['REF-002', 'Imprimante Laser HP', 1, 120000, 150000, 5, 3],
            ['REF-003', 'Souris Sans Fil Logitech', 2, 8000, 12000, 50, 20],
            ['REF-004', 'Clavier Mécanique', 2, 15000, 18000, 30, 10],
            ['REF-005', 'Écran 24 pouces', 2, 95000, 110000, 15, 5],
            ['REF-006', 'Smartphone Samsung Galaxy', 3, 180000, 220000, 20, 5],
            ['REF-007', 'Coque de Protection', 3, 5000, 7000, 100, 30],
            ['REF-008', 'Chargeur USB-C', 3, 10000, 15000, 40, 15],
            ['REF-009', 'Ramette de Papier A4', 2, 2500, 3500, 200, 50],
            ['REF-010', 'Stylo à Bille (boîte)', 2, 1500, 2000, 500, 100],
            ['REF-011', 'Classeur à Anneaux', 2, 3000, 4500, 80, 25],
            ['REF-012', 'Riz 5kg', 4, 3000, 4000, 100, 20],
            ['REF-013', 'Huile de Cuisine 1L', 4, 5000, 6500, 60, 15],
            ['REF-014', 'Café Moulu 250g', 4, 4000, 5500, 80, 20],
            ['REF-015', 'Sucre 1kg', 4, 2000, 2800, 120, 30],
        ];

        foreach ($produitData as [$reference, $libelle, $catIndex, $prixAchat, $prixVente, $stockPhysique, $limitStock]) {
            $produit = new Produit();
            $produit->setReference($reference);
            $produit->setLibelle($libelle);
            $produit->setCategory($categories[$catIndex]);
            $produit->setPrixAchat($prixAchat);
            $produit->setPrixVente($prixVente);
            $produit->setStockPhysique($stockPhysique);
            $produit->setLimitStock($limitStock);
            $produit->setStockOptimal($limitStock * 3);

            $entrepotIndex = array_rand($entrepots);
            $produit->addEntrepot($entrepots[$entrepotIndex]);

            $this->em->persist($produit);
            $produits[] = $produit;
        }
        $this->em->flush();
        $io->success(sprintf('Produits créés : %d', count($produits)));

        // 4. EntrepotStock
        foreach ($produits as $produit) {
            foreach ($entrepots as $entrepot) {
                if (mt_rand(0, 1)) {
                    $stock = new EntrepotStock();
                    $stock->setProduct($produit);
                    $stock->setEntrepot($entrepot);
                    $stock->setQuantite(mt_rand(1, 50));
                    $this->em->persist($stock);
                }
            }
        }
        $this->em->flush();
        $io->success('EntrepotStock créés');

        // 5. Utilisateur de test principal
        $userTest = $this->em->getRepository(User::class)->findOneBy(['email' => 'test@test.com']);
        if (!$userTest) {
            $userTest = new User();
            $userTest->setEmail('test@test.com');
            $userTest->setFirstName('Test');
            $userTest->setLastName('User');
            $userTest->setProfession('Test');
            $userTest->setRoles(['ROLE_USER']);
            $userTest->setState(true);
            $userTest->setPassword($this->passwordHasher->hashPassword($userTest, 'password123'));
            $this->em->persist($userTest);
            $this->em->flush();
        }

        // 6. Mouvements de stock
        $mvtTypes = [
            [StockMovement::TYPE_ENTREE, 'Réception achat fournisseur'],
            [StockMovement::TYPE_SORTIE, 'Vente au comptoir'],
            [StockMovement::TYPE_TRANSFERT, 'Transfert entre entrepôts'],
            [StockMovement::TYPE_AJOUT, 'Correction d\'inventaire (ajout)'],
            [StockMovement::TYPE_RETRAIT, 'Correction d\'inventaire (retrait)'],
        ];

        foreach (range(1, 20) as $i) {
            $produit = $produits[array_rand($produits)];
            $source = $entrepots[array_rand($entrepots)];
            $dest = $entrepots[array_rand($entrepots)];
            $type = $mvtTypes[array_rand($mvtTypes)];

            $mvt = new StockMovement();
            $mvt->setProduit($produit);
            $mvt->setEntrepotSource($source);
            $mvt->setEntrepotDestination($type === StockMovement::TYPE_TRANSFERT ? $dest : null);
            $mvt->setUser($userTest);
            $mvt->setQuantite(mt_rand(1, 10));
            $mvt->setTypeMouvement($type[0]);
            $mvt->setMotif($type[1]);
            $daysAgo = mt_rand(0, 30);
            $mvt->setCreatedAt(new \DateTimeImmutable("-{$daysAgo} days"));

            $this->em->persist($mvt);
        }
        $this->em->flush();
        $io->success('Mouvements de stock créés : 20');

        // 7. Utilisateurs supplémentaires
        $userData = [
            ['admin@test.com', 'Administrateur', 'Système', ['ROLE_ADMINISTRATEUR'], true],
            ['vendeur@test.com', 'Vendeur', 'Boutique', ['ROLE_USER'], true],
            ['gestion@test.com', 'Gestionnaire', 'Stock', ['ROLE_USER'], true],
        ];

        foreach ($userData as [$email, $firstName, $lastName, $roles, $state]) {
            $existing = $this->em->getRepository(User::class)->findOneBy(['email' => $email]);
            if ($existing) {
                continue;
            }
            $user = new User();
            $user->setEmail($email);
            $user->setFirstName($firstName);
            $user->setLastName($lastName);
            $user->setProfession('Test');
            $user->setRoles($roles);
            $user->setState($state);
            $user->setPassword($this->passwordHasher->hashPassword($user, 'password123'));
            $this->em->persist($user);
        }
        $this->em->flush();
        $io->success('Utilisateurs de test créés');

        $io->newLine();
        $io->text('Comptes de test :');
        $io->text('  - test@test.com / password123 (ROLE_USER)');
        $io->text('  - admin@test.com / password123 (ROLE_ADMINISTRATEUR)');
        $io->text('  - vendeur@test.com / password123 (ROLE_USER)');
        $io->text('  - gestion@test.com / password123 (ROLE_USER)');

        return Command::SUCCESS;
    }
}
