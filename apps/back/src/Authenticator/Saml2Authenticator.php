<?php

declare(strict_types=1);

namespace App\Authenticator;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;
use Symfony\Component\Security\Http\HttpUtils;

class Saml2Authenticator extends AbstractAuthenticator
{
    public function __construct(private readonly UserProviderInterface $userProvider, private readonly HttpUtils $httpUtils, private readonly string $checkPath)
    {
    }

    /**
     * Called on every request to decide if this authenticator should be
     * used for the request. Returning `false` will cause this authenticator
     * to be skipped.
     */
    public function supports(Request $request): bool|null
    {
        if (!str_contains($request->getRequestFormat() ?? '', 'json') && !str_contains($request->getContentType() ?? '', 'json')) {
            return false;
        }

        return !isset($this->checkPath) || $this->httpUtils->checkRequestPath($request, $this->checkPath);
    }

    public function authenticate(Request $request): Passport
    {
        $data = \json_decode((string) $request->getContent(), true, 512, JSON_THROW_ON_ERROR);

        $username = $data['username'];

        $this->userProvider->loadUserByIdentifier($username);

        return new SelfValidatingPassport(new UserBadge($username));
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): Response|null
    {
        // on success, let the request continue
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): Response|null
    {
        $data = [
            // you may want to customize or obfuscate the message first
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData()),

        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }
}
