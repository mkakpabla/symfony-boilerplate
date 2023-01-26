import { defineStore } from 'pinia';
import useMe, { Me } from '~/composables/api/auth/useMe';
import useLogin from '~/composables/api/auth/useLogin';

type User = Me;

type AuthState = {
  authUser: User | null;
  isPending: boolean;
};

export const useAuthUser = defineStore({
  id: 'auth-store',
  state: (): AuthState => ({
    authUser: null,
    isPending: false,
  }),
  actions: {
    async authenticateUser(username: string, password: string) {
      const authenticate = useLogin();
      try {
        this.startPending();
        const me = await authenticate(username, password);
        this.setAuthUser(me);
        this.endPending();
        return me;
      } catch (e) {
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
      if (this.isPending) {
        return { data: null, error: null, isPending: this.isPending };
      }
      // Our session is based on the PHPSESSID cookie
      const me = useMe();
      try {
        this.startPending();
        const authUser = await me();
        this.setAuthUser(authUser);
        this.endPending();
        return { data: authUser, error: null, isPending: this.isPending };
      } catch (e: any) {
        this.endPending();
        const is401 = e?.response?.status === 401;
        if (!is401) {
          // TODO error store in appFetch
          throw e;
        }

        return {
          data: null,
          // eslint-disable-next-line
          error: await e.response._data,
          isPending: this.isPending,
        };
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.authUser,
  },
});

export default useAuthUser;
