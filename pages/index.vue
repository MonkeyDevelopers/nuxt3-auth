<template>
  <div class="text-2xl">
    Home Page
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});

</script>
