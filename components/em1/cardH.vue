<template>
  <Em1Board>
      <p class="font-light">{{ data.title }}</p>
      <p class="flex items-center">
        <slot></slot>
      </p>
      <p class="text-sky-700 font-extralight">{{ data.description }}</p>
  </Em1Board>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: {
    title: string;
    description?: string;
  };
}>();

const { data } = props;
</script>
