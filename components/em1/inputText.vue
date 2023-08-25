<template>
  <label class="select-none" v-if="label">
    <b>{{ label }}</b>
  </label>
  <input
    class="w-full py-3 px-5 my-2 mx-0.5 inline-block box-border border border-solid border-gray-300 focus:border-blue-500 focus:outline-none focus:text-primary"
    v-model="modelValue"
    type="text"
    :placeholder="placeholder"
  />
</template>

<style>
.input {
  margin: 8px 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  placeholder?: string;
}>();

const { placeholder, label } = props;
const modelValue = defineModel();
</script>
