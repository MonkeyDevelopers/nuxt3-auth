<template>
  <div>
    <header>
      <Em1Navbar
        :items="navbarItems"
        class="w-full h-16 bg-gradient-to-r from-primaryDark to-primary"
        menuClass="bg-primary"
      >
        Loopee
      </Em1Navbar>
    </header>
    <div class="p-4 my-16 mx-auto">
      <slot> </slot>
    </div>
    <footer v-if="authenticated">
      <h1>Footer</h1>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const router = useRouter();

const navbarItems = ref([
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Teste", link: "/teste" },
]);

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
