import useAppFetch from "~/composables/useAppFetch";

// https://nuxt.com/docs/getting-started/data-fetching#example-pass-client-headers-to-the-api

import {Me} from './useMe';
export default function () {
    const { $appFetch } = useNuxtApp();
    return (email: string) => $appFetch<Me>("/api/1.0/auth/login", {
        method: "post",
        body: {
            "username": email
        }
    });
}