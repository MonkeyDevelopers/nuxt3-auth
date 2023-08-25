import { useAuthStore } from "~/store/auth";
import { useLoadingStore } from "~/store/loading";
const store = useAuthStore();

export function authLogout() {
  store.logUserOut();
}

export async function authLogin(data: { username: string; password: string }) {
  useLoadingStore().setLoading(true);
  await store.authenticateUser(data);
  useLoadingStore().setLoading(false);
}
