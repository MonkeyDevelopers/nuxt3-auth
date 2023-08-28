<template>
  <Em1Dropdown :options="items" isMenu itemClass="right-4 md:right-0">
    <Em1Avatar :imageUrl="item.url" :name="item.name" class="h-8 w-8"/>
  </Em1Dropdown>
</template>

<script setup lang="ts">
const item = ref({
  name: "Padoca",
  url: "https://flipdish.imgix.net/ggL8GLlRSfIYkQVfVhnOI5U.png?w=250&fm=png32?w=120",
});

const items = ref([
  { text: "2 Lads" },
  { text: "Loopee" },
  { text: "Studio Jocasta Fraga" },
]);
</script>
