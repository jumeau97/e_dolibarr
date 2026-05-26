<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260522114914 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE home (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit_entrepot (produit_id INT NOT NULL, entrepot_id INT NOT NULL, INDEX IDX_F11A2549F347EFB (produit_id), INDEX IDX_F11A254972831E97 (entrepot_id), PRIMARY KEY(produit_id, entrepot_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE produit_entrepot ADD CONSTRAINT FK_F11A2549F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit_entrepot ADD CONSTRAINT FK_F11A254972831E97 FOREIGN KEY (entrepot_id) REFERENCES entrepot (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit ADD prix_achat DOUBLE PRECISION NOT NULL, ADD prix_vente DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produit_entrepot DROP FOREIGN KEY FK_F11A2549F347EFB');
        $this->addSql('ALTER TABLE produit_entrepot DROP FOREIGN KEY FK_F11A254972831E97');
        $this->addSql('DROP TABLE home');
        $this->addSql('DROP TABLE produit_entrepot');
        $this->addSql('ALTER TABLE produit DROP prix_achat, DROP prix_vente');
    }
}
