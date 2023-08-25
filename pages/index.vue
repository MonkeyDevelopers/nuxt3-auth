<template>
  <div>
    Home Page
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});

</script>
