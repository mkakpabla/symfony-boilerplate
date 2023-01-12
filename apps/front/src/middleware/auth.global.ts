
import {useAuthUser} from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthUser();
    // We refresh the data information
    // If the syncMe result in a 401, the component RedirectToLogin will be triggered
    await authStore.syncMe();
});