<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserFormType;
use App\Model\RoleStatus;
use App\Payload\Utils\GlobalResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Serializer\SerializerInterface;

//#[Route("/user")]
final class UserController extends AbstractController
{
    #[Route('/user', name: 'user_list')]
    public function list(
        Request                     $request,
        EntityManagerInterface      $entityManager,
        UserPasswordHasherInterface $passwordHasher
    ): Response
    {
        $user = new User();
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();


            $password = $passwordHasher->hashPassword(
                $user,
                bin2hex(random_bytes(8))
            );
            $user->setPassword($password);
            $user->addRole(RoleStatus::ROLE_APPRENANT);
//            dd($user);

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_list');
        }

        return $this->render('user/index.html.twig', [
            'userForm' => $form->createView(),
        ]);
    }


    #[Route("/api/user/current-user", name: "current-user", methods: ["GET"])]
    public function currentUser(#[CurrentUser] $user, SerializerInterface $serializer)
    {
//        dd($user);
        if (!$user) {
            return GlobalResponse::error("Merci de vous connecter");
        }
        $jsonData = json_decode($serializer->serialize($user, 'json', ['groups' => 'getUsers']),true);
        return GlobalResponse::successWith("L'utilisateur connecté", $jsonData);
    }
}
