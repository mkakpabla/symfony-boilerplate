import { defineStore } from 'pinia';
import useMe, { Me } from "~/composables/api/auth/useMe";
import useLogin from "~/composables/api/auth/useLogin";

type User = Me;

type AuthState = {
    authUser: User | null
}

export const useAuthUser = defineStore({
    id: 'auth-store',
    state: (): AuthState => {
        return {
            authUser: null,
        }
    },
    actions: {
        async authenticateUser(username: string, password: string) {
            const authenticate = useLogin();
            const me = await authenticate(username);
            this.setAuthUser(me);
            return me;
        },
        removeAuthUser() {
            this.authUser = null;
        },
        resetAuth() {
            this.removeAuthUser();
        },
        setAuthUser(authUser: User) {
            this.authUser = authUser;
        },
        async syncMe() {
            // Our session is based on the PHPSESSID cookie
            const me = useMe();
            try {
                const authUser = await me();
                this.setAuthUser(authUser);
                return authUser;
            }
            catch (e: any) {
                if (!e || !e.response || e.response.status !== 401) {
                    // TODO error store in appFetch
                    throw e;
                }
            }
        }
    },
    getters: {
        isAuthenticated: state => !!state.authUser,
    },
})