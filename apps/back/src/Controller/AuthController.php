<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class AuthController
{
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
}
