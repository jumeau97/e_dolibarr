<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20261124120000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create caisse, depense tables and add image to produit';
    }

    public function up(Schema $schema): void
    {
        // Table caisse
        $caisse = $schema->createTable('caisse');
        $caisse->addColumn('id', 'integer', ['autoincrement' => true]);
        $caisse->addColumn('date_ouverture', 'datetime_immutable', []);
        $caisse->addColumn('date_fermeture', 'datetime_immutable', ['notnull' => false]);
        $caisse->addColumn('solde_initial', 'decimal', ['precision' => 12, 'scale' => 2]);
        $caisse->addColumn('solde_final', 'decimal', ['precision' => 12, 'scale' => 2, 'notnull' => false]);
        $caisse->addColumn('statut', 'string', ['length' => 20]);
        $caisse->addColumn('utilisateur_id', 'integer', []);
        $caisse->addColumn('motif_fermeture', 'string', ['length' => 255, 'notnull' => false]);
        $caisse->setPrimaryKey(['id']);
        $caisse->addIndex(['utilisateur_id'], 'IDX_CAISSE_USER');
        $caisse->addForeignKeyConstraint('user', ['utilisateur_id'], ['id'], [], 'FK_CAISSE_USER');

        // Table depense
        $depense = $schema->createTable('depense');
        $depense->addColumn('id', 'integer', ['autoincrement' => true]);
        $depense->addColumn('montant', 'decimal', ['precision' => 12, 'scale' => 2]);
        $depense->addColumn('motif', 'string', ['length' => 255]);
        $depense->addColumn('date_depense', 'datetime_immutable', []);
        $depense->addColumn('categorie', 'string', ['length' => 100, 'notnull' => false]);
        $depense->addColumn('utilisateur_id', 'integer', []);
        $depense->addColumn('reference', 'string', ['length' => 255, 'notnull' => false]);
        $depense->setPrimaryKey(['id']);
        $depense->addIndex(['utilisateur_id'], 'IDX_DEPENSE_USER');
        $depense->addForeignKeyConstraint('user', ['utilisateur_id'], ['id'], [], 'FK_DEPENSE_USER');

        // Ajout colonne image à produit
        $schema->getTable('produit')->addColumn('image', 'string', ['length' => 255, 'notnull' => false]);
        $schema->getTable('produit')->addColumn('image_updated_at', 'datetime_immutable', ['notnull' => false]);
    }

    public function down(Schema $schema): void
    {
        $schema->dropTable('depense');
        $schema->dropTable('caisse');
        $schema->getTable('produit')->dropColumn('image');
        $schema->getTable('produit')->dropColumn('image_updated_at');
    }
}
