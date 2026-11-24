<?php

namespace App\Form;

use App\Entity\Depense;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThan;
use Symfony\Component\Validator\Constraints\NotBlank;

class DepenseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('montant', MoneyType::class, [
                'label' => 'Montant (FCFA)',
                'currency' => 'XOF',
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => '0.00',
                    'min' => 0
                ],
                'constraints' => [
                    new NotBlank(message: 'Le montant est requis.'),
                    new GreaterThan(['value' => 0, 'message' => 'Le montant doit être supérieur à 0.']),
                ],
            ])
            ->add('motif', TextareaType::class, [
                'label' => 'Motif / Libellé',
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 3,
                    'placeholder' => 'Ex: Achat de papeterie, facture électricité...'
                ],
                'constraints' => [
                    new NotBlank(message: 'Le motif est requis.'),
                ],
            ])
            ->add('categorie', ChoiceType::class, [
                'label' => 'Catégorie',
                'choices' => [
                    'Fournitures de bureau' => 'Fournitures',
                    'Loyer / Électricité' => 'Loyer',
                    'Transport' => 'Transport',
                    'Marketing / Publicité' => 'Marketing',
                    'Salaires' => 'Salaires',
                    'Entretien / Maintenance' => 'Entretien',
                    'Autre' => 'Autre',
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-control select2',
                    'style' => 'width: 100%;'
                ],
            ])
            ->add('reference', TextType::class, [
                'label' => 'Référence (facture, reçu...)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ex: FACT-2026-001'
                ],
            ])
            ->add('dateDepense', DateTimeType::class, [
                'label' => 'Date de la dépense',
                'widget' => 'single_text',
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'datetime-local'
                ],
                'data' => new \DateTimeImmutable(),
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Depense::class,
        ]);
    }
}
