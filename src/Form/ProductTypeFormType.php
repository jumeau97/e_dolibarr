<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Entrepot;
use App\Entity\Produit;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ProductTypeFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $entrepotResponsable = $options['entrepot_responsable'];

        $builder
            ->add('reference', TextType::class, [
                'label' => 'Référence / Code unique',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: CIM-50 (Laisser vide pour auto-générer)'
                ]
            ])
            ->add('libelle', TextType::class, [
                'label' => 'Nom du produit ou article',
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: Sac de Ciment 50kg'
                ]
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'libelle',
                'label' => 'Catégorie',
                'required' => false,
                'attr' => [
                    'class' => 'form-control select2',
                    'style' => 'width: 100%;'
                ],
                'placeholder' => 'Sélectionner une catégorie...'
            ])

            // --- SECTION PRIX ---
            ->add('prixAchat', MoneyType::class, [
                'label' => 'Prix d\'Achat (Coût)',
                'currency' => 'XOF',
                'required' => false,
                'attr' => [
                    'class' => 'form-control text-danger font-weight-bold',
                    'placeholder' => '0'
                ]
            ])
            ->add('prixVente', MoneyType::class, [
                'label' => 'Prix de Vente',
                'currency' => 'XOF',
                'required' => true,
                'attr' => [
                    'class' => 'form-control text-success font-weight-bold',
                    'placeholder' => '0'
                ]
            ])

            // --- SECTION STOCKS ---
            ->add('limitStock', IntegerType::class, [
                'label' => 'Seuil d\'alerte (Minimum)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: 10',
                    'min' => 0
                ]
            ])
            ->add('stockOptimal', IntegerType::class, [
                'label' => 'Stock Optimal (Cible)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: 100',
                    'min' => 0
                ]
            ])
            ->add('entrepots', EntityType::class, [
                'class' => Entrepot::class,
                'mapped'=>false,
                'choice_label' => 'lieu',
                'multiple' => false,
                'label' => 'Entrepôt d\'affectation',
                'data' => $entrepotResponsable,
                'attr' => [
                    'class' => 'form-control select2',
                    'style' => 'width: 100%;'
                ],
                'disabled' => $entrepotResponsable !== null,
                'help' => $entrepotResponsable
                    ? 'Affectation automatique à votre entrepôt de responsabilité.'
                    : 'Sélectionnez le site physique unique où stocker cet article.'
            ])
            ->add('imageFile', VichImageType::class, [
                'label' => 'Image du produit',
                'required' => false,
                'allow_delete' => true,
                'download_uri' => false,
                'attr' => [
                    'class' => 'form-control',
                    'accept' => 'image/*'
                ],
                'help' => 'Format recommandé : JPG, PNG, WEBP (max 2Mo)'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produit::class,
            'entrepot_responsable' => null,
        ]);
    }

}
