<template>
  <div>
    <div v-if="show" @click="show = !show">Aberto</div>
    <div v-else @click="show = !show">Fechado</div>
    <input
      v-model="modelValue"
      :type="show ? 'text' : 'password'"
      class="input"
      :placeholder="placeholder"
      name="uname"
      required
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps();

let { placeholder } = props;

const show = ref(false);
const modelValue = defineModel();
</script>
