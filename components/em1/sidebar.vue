<template>
  <div :class="baseClass">
    <div :class="menuClass">
      <li :class="mini ? 'flex pt-2 mb-10' : 'flex justify-center items-center p-2 mb-10'">
        <icon
          name="heroicons:bars-4-20-solid"
          class="h-6 w-6 dark:text-white"
          @click="this.mini = !this.mini"
        ></icon>
      </li>
      <div class="flex justify-center p-2">
        <slot></slot>
      </div>
      <ul class="font-medium border-t mx-2 text-black dark:text-white border-gray-700">
        <div class="flex flex-col gap-2 mt-2">
          <li :class="optionsClass" v-for="(item, index) in items" :key="index">
            <NuxtLink :to="item.link" :class="optionsClass">
              <Icon :name="item.icon" class="h-6 w-6" />
              <span v-if="this.mini">{{ item.label }}</span>
            </NuxtLink>
          </li>
        </div>
      </ul>
      <ul
        v-if="items2"
        class="pt-4 mx-2 mt-4 space-y-2 font-medium border-t text-white border-gray-700"
      >
        <li :class="optionsClass" v-for="(item, index) in items2" :key="index">
          <NuxtLink :to="item.link">
            <Icon :name="item.icon" class="h-6 w-6" />
            <span v-if="this.mini">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="pt-4 mx-2 mt-4 space-y-2 font-medium border-t border-gray-700  cursor-pointer"
      >
        <li :class="optionsClass" @click="logout()">
          <Icon
            name="heroicons:arrow-left-on-rectangle-solid"
            class="h-6 w-6 dark:text-white"
          />
          <span v-if="this.mini">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
    items2: {
      type: Array,
    },
    em1Class: String,
    class: String,
  },

  data() {
    return {
      mini: false,
    };
  },
  methods: {
    logout() {
      authLogout();
      this.$router.push("/login");
    },
  },
  computed: {
    optionsClass() {
      const base = "flex gap-2 hover:bg-blue-300 dark:hover:bg-gray-600 px-2 py-2";
      if (!this.mini) {
        return `${base} justify-center items-center`;
      }
      return `${base}`;
    },
    baseClass() {
      const base = `transition-all duration-500 ${this.class}`;
      if (this.mini) {
        return `${base} w-64`;
      }
      return `${base} w-16`;
    },
    menuClass() {
      const base = `h-full overflow-y-auto ${this.em1Class}`;
      if (this.mini) {
        return `${base} px-3`;
      }
      return `${base}`;
    },
  },
};
</script>
