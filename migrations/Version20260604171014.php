<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260604171014 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE entrepot_stock (id INT AUTO_INCREMENT NOT NULL, entrepot_id INT DEFAULT NULL, product_id INT DEFAULT NULL, quantite INT DEFAULT NULL, INDEX IDX_A9F4E4572831E97 (entrepot_id), INDEX IDX_A9F4E454584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE entrepot_stock ADD CONSTRAINT FK_A9F4E4572831E97 FOREIGN KEY (entrepot_id) REFERENCES entrepot (id)');
        $this->addSql('ALTER TABLE entrepot_stock ADD CONSTRAINT FK_A9F4E454584665A FOREIGN KEY (product_id) REFERENCES produit (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE entrepot_stock DROP FOREIGN KEY FK_A9F4E4572831E97');
        $this->addSql('ALTER TABLE entrepot_stock DROP FOREIGN KEY FK_A9F4E454584665A');
        $this->addSql('DROP TABLE entrepot_stock');
    }
}
