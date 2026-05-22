<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, [
                'label' => 'Prénom',
                'attr' => ['placeholder' => 'Prénom']
            ])
            ->add('lastName', TextType::class, [
                'label' => 'Nom',
                'attr' => ['placeholder' => 'Nom']
            ])
            ->add('sexe', ChoiceType::class, [
                'label' => 'Sexe',
                'choices' => [
                    'Masculin' => 'M',
                    'Féminin' => 'F',
                ],
                'expanded' => false,
                'multiple' => false,
            ])

            ->add('email', EmailType::class, [
                'label' => 'Adresse Email',
                'attr' => ['placeholder' => 'exemple@gmail.com']
            ])
            ->add('phoneNumber', TelType::class, [
                'label' => 'Téléphone',
                'required' => false,
                'attr' => ['placeholder' => '+223 ...']
            ])
//            ->add('plainPassword', PasswordType::class, [
//                'label' => 'Mot de passe',
//                'mapped' => false,
//                'attr' => ['autocomplete' => 'new-password']
//            ])
            ->add('roles', ChoiceType::class, [
                'label' => 'Rôle utilisateur',
                'choices' => [
//                    'Apprenant' => 'ROLE_USER',
                    'Formateur' => 'ROLE_FORMATEUR',
                    'Administrateur' => 'ROLE_ADMIN',
                ],
                'multiple' => true,
                'expanded' => false,
                'attr' => ['class' => 'select2']
            ])
            ->add('profession', TextType::class, [
                'label' => 'Profession',
                'attr' => ['placeholder' => 'Profession'],
                'required' => false,
            ])
            ->add('domaine', TextType::class, [
                'label' => 'Domaine d\'activité',
                'attr' => ['placeholder' => 'Domaine d\'activité'],
                'required' => false,
            ])
            ->add('niveau', ChoiceType::class, [
                'label' => 'Niveau d\'études',
                'choices' => [
                    'Bac' => 'BAC',
                    'Licence' => 'LICENCE',
                    'Master' => 'MASTER',
                    'Doctorat' => 'DOCTORAT',
                    'Autre' => 'AUTRE',
                ],
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
