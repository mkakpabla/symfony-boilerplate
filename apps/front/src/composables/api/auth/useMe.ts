export interface Me {
  email: string;
}

export default function useMe(): () => Promise<Me> {
  const { $appFetch } = useNuxtApp();
  return () => $appFetch<Me>('/api/1.0/auth/me');
}
