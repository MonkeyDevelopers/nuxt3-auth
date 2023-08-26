<template>
  <button :class="base" @click.prevent="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    class: String,
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
  computed: {
    base() {
      return `py-2 px-4 bg-gray-600 font-semibold text-white  transition duration-200 select-none ${this.class}`;
    },
  },
};
</script>
