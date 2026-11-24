<?php

namespace App\Form;

use App\Entity\Entrepot;
use App\Entity\Produit;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class TransfereStockFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => Produit::class,
                'choice_label' => 'libelle',
                'attr' => [
                    'class' => 'form-control',
                    'id' => 'transfere_stock_form_product']
            ])

            // Entrepôt Source (Départ)
            ->add('entrepotSource', EntityType::class, [
                'class' => Entrepot::class,
                'choice_label' => 'lieu', // Nom du champ affiché dans le select (ex: lieu ou nom)
                'placeholder' => "-- Choisir le dépôt d'origine--",
                'required' => true,
                'attr' => ['class' => 'form-control custom-select shadow-sm'],
                'constraints' => [new NotBlank(message: 'L\'entrepôt de départ est requis.')]
            ])

            // Entrepôt Destination (Arrivée)
            ->add('entrepotDestination', EntityType::class, [
                'class' => Entrepot::class,
                'choice_label' => 'lieu',
                'placeholder' => '-- Choisir le dépôt de destination --',
                'required' => true,
                'attr' => ['class' => 'form-control custom-select shadow-sm'],
                'constraints' => [new NotBlank(message: 'L\'entrepôt d\'arrivée est requis.')]
            ])

            // Quantité à déplacer
            ->add('quantite', IntegerType::class, [
                'label' => 'Quantité à déplacer',
                'required' => true,
                'attr' => [
                    'class' => 'form-control shadow-sm font-weight-bold',
                    'min' => 1,
                    'placeholder' => 'Ex: 50'
                ],

            ])

            // Commentaire / Motif du transfert
            ->add('motif', TextareaType::class, [
                'label' => 'Motif du mouvement',
                'required' => false,
                'attr' => [
                    'class' => 'form-control shadow-sm text-sm',
                    'rows' => 2,
                    'placeholder' => 'Ex: Rééquilibrage des stocks avant inventaire...'
                ]
            ]);

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'csrf_protection' => true,
            'csrf_token_id'   => 'transfert_stock_item',
        ]);
    }
}
