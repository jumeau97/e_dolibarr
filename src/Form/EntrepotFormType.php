<?php

namespace App\Form;

use App\Entity\Entrepot;
use App\Entity\Produit;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EntrepotFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lieu', TextType::class, [
                'label' => 'Nom du site / Lieu',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: Dépôt Central, Boutique Centre-Ville...'
                ]
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description / Spécificités',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 2,
                    'placeholder' => 'Zone de stockage de gros, produits périssables...'
                ]
            ])
            ->add('address', TextareaType::class, [
                'label' => 'Adresse physique',
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 2,
                    'placeholder' => 'Quartier, Rue, Porte...'
                ]
            ])
            ->add('town', TextType::class, [
                'label' => 'Ville',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: Bamako, Sikasso, Kayes...'
                ]
            ])
            ->add('phone', TelType::class, [
                'label' => 'Contact Téléphonique',
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: +223 70 00 00 00'
                ]
            ])
            ->add('status', ChoiceType::class, [
                'label' => 'Statut opérationnel',
                'choices' => [
                    'Actif / Opérationnel' => 'active',
                    'En Maintenance / Surchargé' => 'maintenance',
                    'Inactif / Fermé' => 'inactive',
                ],
                'attr' => [
                    'class' => 'form-control custom-select'
                ]
            ])
//            ->add('produits', EntityType::class, [
//                'class' => Produit::class,
//                'choice_label' => 'id',
//                'multiple' => true,
//            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Entrepot::class,
        ]);
    }
}
