<template>
  <Em1Dropdown
    :options="items"
    isMenu
    itemClass="right-4 md:right-0"
    @updateValue="changeValue"
  >
    <Em1Avatar
      v-model="item"
      :imageUrl="item?.url"
      :name="item?.value"
      class="h-8 w-8"
    />
    <p class="ml-2 hidden md:block">
      {{ item.value }}
    </p>
  </Em1Dropdown>
</template>

<script setup lang="ts">
const items = ref([
  {
    value: "Padoca",
    url: "https://flipdish.imgix.net/ggL8GLlRSfIYkQVfVhnOI5U.png?w=250&fm=png32?w=120",
  },
  {
    value: "2 Lads",
    url: "https://flipdish.imgix.net/fkpyNhkpHPmNeeYg9rRBNuIKgE.png?w=250&fm=png32",
  },
  { value: "Loopee", url: "https://i.ibb.co/q9C1J5j/image.png" },
  { value: "Studio Jocasta Fraga" },
]);

const item = ref(items.value[0]);

function changeValue(value: any) {
  item.value = items.value.find(
    (x: { value: string; url?: string }) => x.value === value
  );
}
</script>
