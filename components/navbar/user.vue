<template>
  <Em1Dropdown :options="items" isMenu itemClass="right-4 md:right-0">
    <Em1Avatar :imageUrl="item.url" :name="item.name" class="h-8 w-8"/>
    <p class="ml-2 hidden md:block">
        {{ item.name }}
      </p>
  </Em1Dropdown>
</template>

<script setup lang="ts">
const item = ref({
  name: "Joao das Couves",
  url: "https://github.com/Em1Tech.png",
});

const items = ref([
  { text: "Settings", icon: "mdi:account-settings-variant" },
  {
    text: "Sair",
    icon: "heroicons:arrow-left-on-rectangle-solid",
    action: () => {
      authLogout();
    },
  },
]);
</script>
