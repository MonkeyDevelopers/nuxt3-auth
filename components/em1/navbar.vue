<template>
  <nav :class="navListClass">
    <button
      class="dark:text-white hover:text-blue-300 md:hidden"
      @click="toggleMobileMenu"
    >
      ☰
    </button>
    <div
      class="flex items-center justify-between w-full dark:text-white font-semibold text-lg"
    >
      <div>
        <slot></slot>
      </div>
    </div>
    <div v-if="itemInLine" class="flex gap-6 px-10">
      <div
        class="font-semibold hidden md:block"
        v-for="item in items"
        :key="item.id"
      >
        <NuxtLink :to="item.link" class="dark:text-white hover:text-gray-300">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
    <div v-if="showMobileMenu" class="md:hidden">
      <div :class="navMenuClass">
        <div v-for="item in items" :key="item.id">
          <NuxtLink :to="item.link" class="text-white hover:text-blue-300">{{
            item.label
          }}</NuxtLink>
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
      return `p-4 flex justify-between items-center ${this.class}`;
    },
    navMenuClass() {
      return `absolute top-12 left-0 w-60 p-4 h-[90vh] ${this.menuClass}`;
    },
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
