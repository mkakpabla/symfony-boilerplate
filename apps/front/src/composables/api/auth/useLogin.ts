import { Me } from './useMe';

export default function useLogin() {
  const { $appFetch } = useNuxtApp();
  return (email: string, password: string) => $appFetch<Me>('/api/1.0/auth/sso/saml2/login', {
    method: 'post',
    body: {
      username: email,
      password,
    },
  });
}
