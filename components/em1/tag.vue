<template>
  <span :class="tagClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    label: String,
    color: {
      type: String,
      default: "default",
    },
    class: String,
  },
  computed: {
    tagClass() {
      const baseClass =
        "inline-block px-2 py-1 rounded-full text-sm font-semibold ";
      switch (this.color) {
        case "primary":
          return `${baseClass} bg-primary text-white ${this.class}`;
        case "success":
          return `${baseClass} bg-green-100 text-green-700 ${this.class}`;
        case "error":
          return `${baseClass} bg-red-100 text-red-700 ${this.class}`;
        case "warning":
          return `${baseClass} bg-yellow-100 text-yellow-700 ${this.class}`;
        case "info":
          return `${baseClass} bg-blue-100 text-blue-700 ${this.class}`;
        case "default":
        default:
          return `${baseClass} bg-gray-300 text-gray-700 ${this.class}`;
      }
    },
  },
};
</script>
