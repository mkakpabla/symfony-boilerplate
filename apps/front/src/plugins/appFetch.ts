// TODO : remove that

import { NitroFetchRequest } from 'nitropack';
import { FetchOptions } from 'ofetch';
import { useAuthUser } from '~/store/auth';

export default defineNuxtPlugin(() => {
  const store = useAuthUser();

  const headers: {
    [key: string]: string;
  } = useRequestHeaders(['cookie']) as {
    [key: string]: string;
  };
  return {
    provide: {
      // // https://nuxt.com/docs/getting-started/data-fetching#example-pass-client-headers-to-the-api
      appFetch: async <T>(request: NitroFetchRequest, opts?: FetchOptions) => {
        try {
          return await $fetch.raw<T>(request, {
            headers,
            ...opts,
          });
        } catch (e: any) {
          // Check if 401 so remove auth info
          if (
            e
            && e.response
            && e.response.status === 401
            && store.isAuthenticated
          ) {
            logger.error('401 error, removing authentication informations');
            store.resetAuth();
          }
          throw e;
        }
      },
    },
  };
});
