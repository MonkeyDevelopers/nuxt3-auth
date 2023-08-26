<template>
  <div class="flex flex-col justify-center items-center px-4">
    <base-logo class="h-16 mt-24" />

    <p class="text-2xl font-bold mt-10">Bem-vindo de volta</p>

    <p class="text-xl font-normal text--primary opacity-60 mt-2">
      Acesse sua conta
    </p>

    <div class="flex flex-col gap-2 w-full md:max-w-[60vh] mt-10">
      <Em1InputText
        v-model="user.username"
        label="Username"
        placeholder="Enter Username"
      />
      <Em1InputPassword
        v-model="user.password"
        label="Password"
        placeholder="Enter Password"
        side="right"
      />
      <Em1Button
        class="bg-primary hover:bg-primaryDark w-full h-12 text-lg"
        @click="login()"
      >
        Login
      </Em1Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { authenticateUser } = useAuthStore();

const { authenticated } = storeToRefs(useAuthStore());

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
