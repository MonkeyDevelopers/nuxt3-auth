<template>
  <label v-if="label">
    <b>{{ label }}</b>
  </label>
  <div class="flex items-center gap-2">
    <div class="cursor-pointer" v-show="show" @click="show = !show">
      <Icon name="heroicons-solid:eye" color="black" class="h-6 w-6" />
    </div>
    <div class="cursor-pointer" v-show="!show" @click="show = !show">
      <Icon name="heroicons-solid:eye-slash" color="black" class="h-6 w-6" />
    </div>
    <input
      v-model="modelValue"
      :type="show ? 'text' : 'password'"
      class="w-full py-3 px-5 my-2 mx-0.5 inline-block box-border border border-solid border-gray-300"
      :placeholder="placeholder"
      name="uname"
      required
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  placeholder?: string;
}>();

const { placeholder, label } = props;

// placeholder = placeholder ?? "Enter Password";

const show = ref(false);
const modelValue = defineModel();
</script>
