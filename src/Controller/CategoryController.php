<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryFormType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/categorie')]
final class CategoryController extends AbstractController
{
    #[Route('', name: 'app_categorie_index', methods: ['GET'])]
    public function index(Request $request, CategoryRepository $categoryRepository, PaginatorInterface $paginator): Response
    {
        $search = $request->query->get('search', '');

        $query = $categoryRepository->createQueryBuilder('c')
            ->orderBy('c.libelle', 'ASC');

        if ('' !== $search) {
            $query->andWhere('c.libelle LIKE :search')
                ->setParameter('search', '%' . $search . '%');
        }

        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );

        $totalPage = ceil($pagination->getTotalItemCount() / 10);

        return $this->render('categorie/index.html.twig', [
            'categories' => $pagination,
            'search' => $search,
            'totalPage' => $totalPage,
        ]);
    }

    #[Route('/add', name: 'app_categorie_add', methods: ['GET', 'POST'])]
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $category = new Category();
        $form = $this->createForm(CategoryFormType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($category);
            $entityManager->flush();

            $this->addFlash('success', 'La catégorie a été créée avec succès.');

            return $this->redirectToRoute('app_categorie_index');
        }

        return $this->render('categorie/form.html.twig', [
            'form' => $form->createView(),
            'mode' => 'add',
        ]);
    }

    #[Route('/edit/{id}', name: 'app_categorie_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Category $category, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CategoryFormType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'La catégorie a été modifiée avec succès.');

            return $this->redirectToRoute('app_categorie_index');
        }

        return $this->render('categorie/form.html.twig', [
            'form' => $form->createView(),
            'category' => $category,
            'mode' => 'edit',
        ]);
    }

    #[Route('/delete/{id}', name: 'app_categorie_delete', methods: ['POST'])]
    public function delete(Request $request, Category $category, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete_category_' . $category->getId(), $request->request->get('_token'))) {
            $entityManager->remove($category);
            $entityManager->flush();

            $this->addFlash('success', 'La catégorie a été supprimée avec succès.');
        }

        return $this->redirectToRoute('app_categorie_index');
    }
}
