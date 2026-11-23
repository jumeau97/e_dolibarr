<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20261123120000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create vente and vente_ligne tables';
    }

    public function up(Schema $schema): void
    {
        $vente = $schema->createTable('vente');
        $vente->addColumn('id', 'integer', ['autoincrement' => true]);
        $vente->addColumn('numero', 'string', ['length' => 50]);
        $vente->addColumn('date_vente', 'datetime_immutable', []);
        $vente->addColumn('montant_ht', 'decimal', ['precision' => 10, 'scale' => 2]);
        $vente->addColumn('remise', 'decimal', ['precision' => 10, 'scale' => 2, 'notnull' => false]);
        $vente->addColumn('montant_ttc', 'decimal', ['precision' => 10, 'scale' => 2]);
        $vente->addColumn('mode_reglement', 'string', ['length' => 50]);
        $vente->addColumn('statut', 'string', ['length' => 50]);
        $vente->addColumn('utilisateur_id', 'integer', []);
        $vente->setPrimaryKey(['id']);
        $vente->addIndex(['utilisateur_id'], 'IDX_9C8D65FBFB6931CD');
        $vente->addForeignKeyConstraint('user', ['utilisateur_id'], ['id'], [], 'FK_9C8D65FBFB6931CD');

        $venteLigne = $schema->createTable('vente_ligne');
        $venteLigne->addColumn('id', 'integer', ['autoincrement' => true]);
        $venteLigne->addColumn('vente_id', 'integer', []);
        $venteLigne->addColumn('produit_id', 'integer', []);
        $venteLigne->addColumn('quantite', 'integer', []);
        $venteLigne->addColumn('prix_unitaire', 'decimal', ['precision' => 10, 'scale' => 2]);
        $venteLigne->addColumn('sous_total', 'decimal', ['precision' => 10, 'scale' => 2]);
        $venteLigne->setPrimaryKey(['id']);
        $venteLigne->addIndex(['vente_id'], 'IDX_B7AE7B7A3DBDC9D1');
        $venteLigne->addIndex(['produit_id'], 'IDX_B7AE7B7AF347EFB');
        $venteLigne->addForeignKeyConstraint('vente', ['vente_id'], ['id'], [], 'FK_B7AE7B7A3DBDC9D1');
        $venteLigne->addForeignKeyConstraint('produit', ['produit_id'], ['id'], [], 'FK_B7AE7B7AF347EFB');
    }

    public function down(Schema $schema): void
    {
        $schema->dropTable('vente_ligne');
        $schema->dropTable('vente');
    }
}
