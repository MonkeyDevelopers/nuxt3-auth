<template>
  <Em1LoadingScreen />

  <div class="flex dark:bg-[#2b2d31]">
    <div class="hidden md:block">
      <Em1Sidebar class="bg-gray-400 dark:bg-black" :items="items">
        <baseLogo class="w-14 h-14"/>
      </Em1Sidebar>
    </div>

    <div class="w-full">
      <Em1Navbar class="bg-gray-400 dark:bg-black" menuClass="bg-gray-400 dark:bg-black" :items="items">
        {{ info }}
      </Em1Navbar>
      <div class="px-2 py-2"><slot></slot></div>
    </div>
  </div>
</template>

<script setup>
import { useNavInfoStore } from '~/store/navInfo';

const { info } = storeToRefs(useNavInfoStore());
const items = ref([
  {
    label: "Home",
    link: "/",
    icon: "heroicons:home-20-solid",
  },
  {
    label: "About",
    link: "/about",
    icon: "heroicons:user-20-solid",
  },
  {
    label: "Teste",
    link: "/teste",
    icon: "heroicons:light-bulb-solid",
  },
]);
</script>
