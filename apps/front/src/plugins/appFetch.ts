// TODO : remove that

import {NitroFetchRequest, TypedInternalResponse} from "nitropack";
import {FetchOptions, FetchResponse} from "ofetch";
import {useAuthUser} from "~/store/auth";

export default defineNuxtPlugin(async () => {
    const store = useAuthUser();

    const headers: {
        [key: string]: string
    } = useRequestHeaders(['cookie']) as {
        [key: string]: string
    };
    return {
        provide: {
            appFetch:  async<T>(
                request: NitroFetchRequest,
                opts?: FetchOptions) => {
                try {
                    return await $fetch<T>(request, {
                        headers,
                        ...opts
                    });
                } catch(e: any) {
                    if (e && e.response && e.response.status === 401 && store.isAuthenticated) {
                        console.error("401 error, removing authentication informations");
                        store.resetAuth();
                    }
                   throw e;
                }
            }
        }
    }
});