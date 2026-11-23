<?php

namespace App\Tests\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class StockMouvementControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        // Créer un utilisateur administrateur pour les tests s'il n'existe pas
        $userRepository = $this->em->getRepository(User::class);
        $admin = $userRepository->findOneBy(['email' => 'admin.test@edolibarr.ml']);

        if (!$admin) {
            $admin = new User();
            $admin->setEmail('admin.test@edolibarr.ml');
            $admin->setRoles(['ROLE_ADMINISTRATEUR']);
            $admin->setState(true);
            $admin->setPassword('$2y$13$7QF1xG3wK7QF1xG3wK7QFeK7QF1xG3wK7QFeK7QF1xG3wK7QFeK'); // hash factice
            $this->em->persist($admin);
            $this->em->flush();
        }

        $this->client->loginUser($admin);
    }

    public function testIndex(): void
    {
        $this->client->request('GET', '/stock/mouvement');

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('h1', 'Journal des Mouvements de Stock');
    }
}
