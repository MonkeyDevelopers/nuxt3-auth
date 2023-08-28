<template>
  <Em1Dropdown :options="items" isMenu>
    <Em1Avatar :name="user.name" :imageUrl="user.url" />
    <span class="ml-2">{{ user.name }}</span>
  </Em1Dropdown>
</template>

<script setup lang="ts">
const user = ref({
    name: "Joao das Couves",
    url: "https://github.com/Em1Tech.png",
});

const items = ref([
  { text: "Settings", icon: "heroicons:heart-20-solid" },
  { text: "Sair", icon: "heroicons:heart-20-solid" },
]);
</script>