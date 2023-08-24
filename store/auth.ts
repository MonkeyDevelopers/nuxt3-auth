import { defineStore } from "pinia";
import { Status } from "~/interfaces/toastStatus.enum";
import { toastMessage } from "~/composables";
import { UserPayloadInterface } from "~/interfaces";

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
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = data?.value?.access_token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      } else {
        toastMessage("Ops vtnc", Status.ERROR, 4000);
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
