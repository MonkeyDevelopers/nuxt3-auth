<template>
  <Em1LoadingScreen />

  <div class="flex bg-[#f2f2f2] dark:bg-[#2b2d31] overflow-hidden">
    <div class="hidden md:block  overflow-hidden">
      <Em1Sidebar
        class="h-screen"
        em1Class="bg-blue-200 dark:bg-black"
        :items="items"
      >
        <baseLogo class="w-14 h-14" />
      </Em1Sidebar>
    </div>

    <div class="w-full overflow-hidden">
      <Navbar />
      <div class="px-2 py-2 overflow-auto h-[93vh]"><slot></slot></div>
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
