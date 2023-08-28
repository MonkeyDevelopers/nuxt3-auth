<template>
  <Em1Label :label="label" />
  <div class="relative">
    <Icon
      @mousedown.prevent
      @click="show = !show"
      :name="show ? 'heroicons-solid:eye' : 'heroicons-solid:eye-slash'"
      :color="show ? '#1242bd' : '#515151'"
      class="absolute left-3 top-5 text-gray-400 h-6 w-6 cursor-pointer"
    />
    <input
      :value="modelValue"
      @input="onInput"
      :type="show ? 'text' : 'password'"
      class="w-full dark:bg-black dark:text-white py-3 px-4 pl-10 my-2 mx-0.5 inline-block box-border border border-solid border-gray-300 focus:border-primary focus:outline-none focus:text-primary dark:focus:text-white"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  placeholder?: string;
  modelValue?: any;
}>();

const { placeholder, label } = props;

// placeholder = placeholder ?? "Enter Password";

const show = ref(false);

const emit = defineEmits(["update:modelValue"]);

function onInput(e: any) {
  emit("update:modelValue", e.target.value);
}

// const modelValue = defineModel();
</script>
