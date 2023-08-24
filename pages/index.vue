<template>
  <div @click="toastMessage('Isso aqui deu certo', Status.SUCCESS, 4000)">
    Home Page
  </div>
</template>
<script lang="ts" setup>
import { Status } from "~/interfaces/toastStatus.enum";
definePageMeta({
  middleware: ["auth"],
});

onMounted(() => {
  toastMessage("Ae porra", Status.SUCCESS, 4000);
});
</script>
