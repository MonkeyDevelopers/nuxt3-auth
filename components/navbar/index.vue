<template>
  <Em1Navbar
    class="bg-blue-200 dark:bg-black"
    menuClass="bg-blue-200 dark:bg-black"
    :items="items"
  >
    <div class="flex md:justify-between justify-end items-center w-[95vw]">
      <p class="hidden md:block">
        {{ info }}
      </p>
      <div class="flex">
        <NavbarLanguages />
        <NavbarOrganisations />
        <NavbarUser />
      </div>
    </div>
  </Em1Navbar>
</template>

<script setup>
const { info } = storeToRefs(useNavInfoStore());
</script>
