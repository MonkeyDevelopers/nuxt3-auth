<template>
  <label class="select-none" v-if="label">
    <b>{{ label }}</b>
  </label>
  <div class="flex items-center gap-2">
    <input
      :value="modelValue"
      @input="onInput"
      :type="show ? 'text' : 'password'"
      class="w-full py-3 px-5 my-2 mx-0.5 inline-block box-border border border-solid border-gray-300 focus:border-primary focus:outline-none focus:text-primary"
      :placeholder="placeholder"
      name="uname"
      required
    />
    <div>
      <div class="cursor-pointer" v-show="show" @click="show = !show">
        <Icon
          name="heroicons-solid:eye"
          class="h-6 w-6 text-primary hover:text-primaryDark"
        />
      </div>
      <div class="cursor-pointer" v-show="!show" @click="show = !show">
        <Icon
          name="heroicons-solid:eye-slash"
          class="h-6 w-6 text-primary hover:text-primaryDark"
        />
      </div>
    </div>
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
