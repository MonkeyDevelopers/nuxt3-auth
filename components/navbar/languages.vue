<template>
  <Em1Dropdown :options="items" isMenu itemClass="md:right-0" @updateValue="changeValue">
    <Em1Avatar :icon="item.icon" class="h-8 w-8" />
  </Em1Dropdown>
</template>

<script setup lang="ts">


const items = ref([
  { value: "Portuguese", icon: "circle-flags:br" },
  { value: "English", icon: "circle-flags:us" },
]);

const item = ref(items.value[0]);

function changeValue(value: any) {
  console.log(value)
  item.value = items.value.find(
    (x: { value: string; icon?: string }) => x.value === value
  );
}
</script>
