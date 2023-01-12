import { defineStore } from 'pinia';
import useMe, { Me } from "~/composables/api/auth/useMe";
import useLogin from "~/composables/api/auth/useLogin";

type User = Me;

type AuthState = {
    authUser: User | null,
    isPending: boolean
}

export const useAuthUser = defineStore({
    id: 'auth-store',
    state: (): AuthState => {
        return {
            authUser: null,
            isPending: true
        }
    },
    actions: {
        async authenticateUser(username: string, password: string) {
            const authenticate = useLogin();
            try {
                this.startPending();
                const me = await authenticate(username);
                this.setAuthUser(me);
                this.endPending();
                return me;
            } catch(e) {
                this.endPending();
                throw e;
            }
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
        startPending() {
            this.isPending = true;
        },
        endPending() {
            this.isPending = false;
        },
        async syncMe() {
            // Our session is based on the PHPSESSID cookie
            const me = useMe();
            try {
                this.startPending();
                const authUser = await me();
                this.setAuthUser(authUser);
                this.endPending();
                return authUser;
            }
            catch (e: any) {
                this.endPending();
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