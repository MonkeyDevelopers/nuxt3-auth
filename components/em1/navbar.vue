<template>
  <nav :class="navListClass">
    <button
      class="text-white hover:text-blue-300 md:hidden"
      @click="toggleMobileMenu"
    >
      ☰
    </button>
    <div class="text-white font-semibold text-lg hidden md:block">
      <slot></slot>
    </div>
    <div v-if="itemInLine" class="flex gap-6 px-10">
      <div
        class="font-semibold hidden md:block"
        v-for="item in items"
        :key="item.id"
      >
        <a :href="item.link" class="text-white hover:text-gray-300">
          {{ item.label }}
        </a>
      </div>
    </div>
    <div v-if="showMobileMenu" class="md:hidden">
      <div :class="navMenuClass">
        <div v-for="item in items" :key="item.id">
          <a :href="item.link" class="text-white hover:text-blue-300">{{
            item.label
          }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    class: String,
    menuClass: String,
    text: String,
    items: Array,
    itemInLine: Boolean,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
  computed: {
    navListClass() {
      return `bg-gray-700 p-4 flex justify-between items-center ${this.class}`;
    },
    navMenuClass() {
      return `bg-gray-700 absolute top-12 left-0 w-40 p-4  ${this.menuClass}`;
    },
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
