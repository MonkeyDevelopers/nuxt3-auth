import { defineStore } from "pinia";
import { Status } from "~/interfaces/toastStatus.enum";
import { toastMessage } from "~/composables";
import { UserPayloadInterface } from "~/interfaces";

import { useLoadingStore } from "./loading";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      const config = useRuntimeConfig();

      const { data, pending }: any = await useFetch(
        `${getConfig("baseURL")}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            password,
          },
        }
      );
      const { setLoading } = useLoadingStore();
      setLoading(pending);
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.access_token;
        this.authenticated = true;
      } else {
        toastMessage("Erro ao Logar", Status.ERROR, 4000);
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
