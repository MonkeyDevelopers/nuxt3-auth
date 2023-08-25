<template>
  <div class="flex items-center">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Avatar"
      class="w-12 h-12 rounded-full"
    />
    <div v-else :class="base">
      {{ initials.slice(0, 2) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imageUrl: String,
    class: String,
  },
  computed: {
    base() {
      return `w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold ${this.class}`;
    },
    initials() {
      if (this.name) {
        const names = this.name.split(" ");
        return names.map((name) => name.charAt(0).toUpperCase()).join("");
      }
      return "";
    },
  },
};
</script>
