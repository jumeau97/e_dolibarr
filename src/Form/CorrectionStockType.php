<?php

namespace App\Form;

use App\Entity\Entrepot;
use App\Entity\Produit;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThan;
use Symfony\Component\Validator\Constraints\NotBlank;

class CorrectionStockType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => Produit::class,
                'choice_label' => 'libelle',
                'attr' => [
                    'class' => 'form-control']
            ])

            // Entrepôt concerné par la régularisation
            ->add('entrepot', EntityType::class, [
                'class' => Entrepot::class,
                'choice_label' => 'lieu',
                'placeholder' => '-- Choisir l\'entrepôt à corriger --',
                'required' => true,
                'attr' => ['class' => 'form-control custom-select shadow-sm'],
                'constraints' => [new NotBlank(message: 'L\'entrepôt est requis.')]
            ])

            // Type d'ajustement (Entrée positive ou Sortie négative)
            ->add('typeAjustement', ChoiceType::class, [
                'choices' => [
                    'Ajouter au stock (+)' => 'AJOUT',
                    'Retirer du stock (-)' => 'RETRAIT',
                ],
                'expanded' => false,
                'multiple' => false,
                'attr' => ['class' => 'form-control custom-select shadow-sm'],
                'constraints' => [new NotBlank(message: 'Le type de correction est obligatoire.')]
            ])

            // Quantité d'écart constatée
            ->add('quantite', IntegerType::class, [
                'label' => 'Quantité d\'écart',
                'required' => true,
                'attr' => [
                    'class' => 'form-control shadow-sm font-weight-bold',
                    'min' => 1,
                    'placeholder' => 'Ex: 5'
                ],
                'constraints' => [
                    new NotBlank(message: 'Veuillez saisir une quantité.'),
                    new GreaterThan([
                        'value' => 0,
                        'message' => 'La quantité doit être supérieure à 0.'
                    ])
                ]
            ])

            // Motif de la correction (Perte, Casse, Erreur de saisie, Vol, Volatile)
            ->add('motif', TextareaType::class, [
                'label' => 'Raison / Motif de la correction',
                'required' => true,
                'attr' => [
                    'class' => 'form-control shadow-sm text-sm',
                    'rows' => 2,
                    'placeholder' => 'Ex: Constat d\'anomalie lors de l\'inventaire, produit défectueux/cassé...'
                ],
                'constraints' => [new NotBlank(message: 'Veuillez indiquer un motif pour la traçabilité.')]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
