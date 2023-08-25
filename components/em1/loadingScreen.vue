<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
  >
    <div
      class="loader animate-spin rounded-full border-t-4 border-primary border-opacity-75 h-24 w-24"
    ></div>
  </div>
</template>

<script setup>
import { useLoadingStore } from "~/store/loading";

const { loading } = storeToRefs(useLoadingStore());
</script>

<style scoped>
.loader {
  border-left-color: transparent !important;
}
</style>
