<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use OneLogin\Saml2\Auth;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class AuthController
{
    public function __construct(private readonly Auth $auth)
    {
    }

    #[Route('/auth/login', name: 'api_login')]
    public function login(#[CurrentUser] User $user): JsonResponse
    {
        return new JsonResponse($user);
    }

    #[Route('/auth/me', name: 'api_me')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function getLoggedUser(#[CurrentUser] User $user): JsonResponse
    {
        return new JsonResponse($user);
    }

    /** @Route("/auth/sso/saml2/metadata", name="getSsoMetadata", methods={"GET"}) */
    public function getMetadata(): Response
    {
        $auth     = $this->auth;
        $settings = $auth->getSettings();
        $metadata = $settings->getSPMetadata();

        return new Response(content: $metadata, headers: ['content-type' => 'xml']);
    }
}
