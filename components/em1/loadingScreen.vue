<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
  >
    <BaseLogo class="h-42 animate-spin" />
  </div>
</template>

<script setup>
const { loading } = storeToRefs(useLoadingStore());
</script>

<style scoped>
.loader {
  border-left-color: transparent !important;
}
</style>
