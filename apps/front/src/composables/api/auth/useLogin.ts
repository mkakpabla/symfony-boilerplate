import { Me } from './useMe';

export default function useLogin() {
  const { $appFetch } = useNuxtApp();
  return (email: string, password: string) => $appFetch<Me>('/api/1.0/auth/login', {
    method: 'post',
    body: {
      username: email,
      password,
    },
  });
}
