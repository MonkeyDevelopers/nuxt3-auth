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

      <Em1Avatar
        name="Caio"
        imageUrl="https://github.com/caio-emidio.png"
        class="bg-primary text-white"
      />

      <div class="flex gap-2">
        <Em1Tag>Default</Em1Tag>
        <Em1Tag color="primary">Primary</Em1Tag>
        <Em1Tag color="success">Success</Em1Tag>
        <Em1Tag color="info">Info</Em1Tag>
        <Em1Tag color="warning">Warning</Em1Tag>
        <Em1Tag color="error">Error</Em1Tag>
      </div>


      <div class="mt-4">
        <Em1Button
          class="bg-primary hover:bg-primaryDark"
          @click.prevent="login()"
          >Login</Em1Button
        >
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

const navbarItems = ref([
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Contact", link: "/contact" },
]);

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    router.push("/");
    return;
  }
};
</script>
