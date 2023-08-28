<template>
  <Em1Dropdown
    :options="items"
    isMenu
    notChangeValue
    itemClass="right-4 md:right-0"
  >
    <Em1Avatar :imageUrl="item.url" :name="item.value" class="h-8 w-8" />
    <p class="ml-2 hidden md:block">
      {{ item.value }}
    </p>
  </Em1Dropdown>
</template>

<script setup lang="ts">
const item = ref({
  value: "Joao das Couves",
  url: "https://github.com/Em1Tech.png",
});

const items = ref([
  { value: "Settings", icon: "mdi:account-settings-variant" },
  {
    value: "Sair",
    icon: "heroicons:arrow-left-on-rectangle-solid",
    action: () => {
      authLogout();
    },
  },
]);
</script>
