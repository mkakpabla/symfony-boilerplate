import useAppFetch from "~/composables/useAppFetch";
import {AsyncData} from "#app/composables/asyncData";

export interface Me {
    email: string
}

export default function (): () => Promise<Me>  {
    const { $appFetch } = useNuxtApp();
    return async () => $appFetch<Me>("/api/1.0/auth/me");
}