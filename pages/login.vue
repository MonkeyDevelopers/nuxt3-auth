<template>
  <div>
    <div class="border-3 border-solid border-gray-200">
      <Em1InputText
        v-model="user.username"
        label="Username"
        placeholder="Enter Username"
      />
      <Em1InputPassword
        v-model="user.password"
        label="Password"
        placeholder="Enter Password"
      />

      <div class="mt-4">
        <button
          @click.prevent="login()"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: "",
  password: "",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    router.push("/");
    return;
  }
};
</script>
