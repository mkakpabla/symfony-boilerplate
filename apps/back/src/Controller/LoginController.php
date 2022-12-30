<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class LoginController
{
    #[Route('/api/login', name: 'api_login')]
    public function login(#[CurrentUser] User $user): JsonResponse
    {
        return new JsonResponse($user);
    }
}
