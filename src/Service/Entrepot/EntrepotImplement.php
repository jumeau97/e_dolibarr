<?php

namespace App\Service\Entrepot;
use App\Payload\Utils\UtilisService;
use App\Repository\EntrepotRepository;
use App\Request\Search\SearchEntrepot;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;



class EntrepotImplement implements EntrepotInterface
{

    public function __construct(
        private UtilisService   $utilisService,
        private EntrepotRepository $entrepotRepository,
        private MailerInterface $mailer
    )
    {
    }


    public function findAllByCriteria($pageNumber, $limit, SearchEntrepot $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->entrepotRepository->findAllByCriteria($data, $pageNumber, $limit));
    }

    public function sendingEmailTo(array $to, string $subject, ?array $context, string $template): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('contact@sanfeni.com'))
            ->to(...$to)
//            ->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
//            ->priority(Email::PRIORITY_HIGH)
            ->subject($subject)
            ->context($context)
            ->htmlTemplate($template);

        $this->mailer->send($email);
    }

    public function sendingEmailFromToBstp( array $addresses, string $subject, $body): void
    {
        $email = (new Email())
            ->from(...$addresses)
            ->to(new Address('contact@sanfeni.com'))
//            ->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
//            ->priority(Email::PRIORITY_HIGH)
            ->subject($subject)
            ->text($body);

        $this->mailer->send($email);
    }
}
