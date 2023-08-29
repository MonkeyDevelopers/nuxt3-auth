<template>
  <Em1Dropdown
    :options="items"
    isMenu
    itemClass="left-2 md:left-0 text-black dark:text-white"
    @updateValue="changeValue"
  >
    <p>
      {{ item.value }}
    </p>
  </Em1Dropdown>
</template>

<script setup lang="ts">
const items = ref([
  { value: "Weekly" },
  { value: "Monthly" },
  { value: "Yearly" },
  { value: "Custom" },
]);

const item = ref(items.value[0]);

function changeValue(value: any) {
  item.value = items.value.find(
    (x: { value: string; url?: string }) => x.value === value
  );
}
</script>
