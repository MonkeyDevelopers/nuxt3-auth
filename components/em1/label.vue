<template>
  <label class="select-none dark:text-white font-light text-lg" v-if="label">
    <b>{{ label }}</b>
  </label>
</template>

<script setup lang="ts">
const { label } = defineProps<{
  label?: string;
}>();
</script>
