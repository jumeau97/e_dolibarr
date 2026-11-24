<?php

namespace App\Form;

use App\Entity\Caisse;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThan;
use Symfony\Component\Validator\Constraints\NotBlank;

class CaisseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $modeFermeture = $options['mode_fermeture'] ?? false;

        $builder
            ->add('soldeInitial', MoneyType::class, [
                'label' => 'Solde initial (FCFA)',
                'currency' => 'XOF',
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => '0.00',
                    'min' => 0
                ],
                'disabled' => $modeFermeture,
            ])
            ->add('soldeFinal', MoneyType::class, [
                'label' => 'Solde final (FCFA)',
                'currency' => 'XOF',
                'required' => !$modeFermeture,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => '0.00',
                    'min' => 0
                ],
                'disabled' => !$modeFermeture,
            ])
            ->add('motifFermeture', TextareaType::class, [
                'label' => 'Motif de clôture',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 3,
                    'placeholder' => 'Ex: Clôture journalière normale'
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Caisse::class,
            'mode_fermeture' => false,
        ]);
    }
}
