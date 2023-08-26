<template>
  <Em1LoadingScreen />

  <div class="flex bg-white">
    <div class="hidden md:block">
      <Em1Sidebar class="bg-sky-800" :items="items">
        <Em1Avatar imageUrl="https://github.com/caio-emidio.png" />
      </Em1Sidebar>
    </div>

    <div class="w-full">
      <Em1Navbar class="bg-gray-700" menuClass="bg-gray-700" :items="items">
        My System
      </Em1Navbar>
      <div class="px-2 py-2"><slot></slot></div>
    </div>
  </div>
</template>

<script setup>
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
