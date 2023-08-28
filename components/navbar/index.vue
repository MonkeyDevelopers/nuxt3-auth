<template>
  <Em1Navbar
    class="bg-blue-200 dark:bg-black"
    menuClass="bg-blue-200 dark:bg-black"
    :items="items"
  >
    <div class="flex justify-between">
      {{ info }}
      <navbarUser />
    </div>
  </Em1Navbar>
</template>

<script setup>
const { info } = storeToRefs(useNavInfoStore());
</script>
