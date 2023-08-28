<template>
  <Em1Label :label="label" />
  <input
    class="w-full bg-white dark:bg-black dark:text-white py-3 px-5 my-2 mx-0.5 inline-block box-border border border-solid border-gray-300 focus:border-blue-500 focus:outline-none dark:focus:text-white"
    :value="modelValue"
    @input="onInput"
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
  modelValue?: any;
}>();

const { placeholder, label } = props;

const emit = defineEmits(["update:modelValue"]);

function onInput(e: any) {
  emit("update:modelValue", e.target.value);
}
</script>
