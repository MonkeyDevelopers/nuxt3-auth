<template>
  <div :class="baseClass">
    <div :class="menuClass">
      <div class="flex justify-center p-2">
        <slot></slot>
      </div>
      <ul class="space-y-2 font-medium border-t border-gray-700">
        <li
          :class="mini ? 'flex pt-2' : 'flex justify-center items-center p-2'"
        >
          <icon
            name="heroicons:bars-4-20-solid"
            class="h-6 w-6 text-white"
            @click="this.mini = !this.mini"
          ></icon>
          <span v-if="this.mini" class="ml-2 text-white"> Expandir </span>
        </li>
        <li v-for="(item, index) in items" :key="index">
          <NuxtLink :to="item.link" :class="optionsClass">
            <Icon :name="item.icon" class="h-6 w-6" />
            <span v-if="this.mini">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
        <li v-for="(item, index) in items2" :key="index">
          <NuxtLink :to="item.link" :class="optionsClass">
            <Icon :name="item.icon" class="h-6 w-6" />
            <span v-if="this.mini">{{ item.label }}</span>
          </NuxtLink>
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
    class: String,
  },

  data() {
    return {
      mini: true,
    };
  },
  computed: {
    optionsClass() {
      const base = "flex text-white gap-2 mt-1";
      if (!this.mini) {
        return `${base} justify-center items-center`;
      }
      return `${base}`;
    },
    baseClass() {
      const base = "h-screen transition-all duration-500";
      if (this.mini) {
        return `${base} w-64`;
      }
      return `${base} w-16`;
    },
    menuClass() {
      const base = `h-full overflow-y-auto bg-black `;
      if (this.mini) {
        return `${base} px-3 py-4`;
      }
      return `${base}`;
    },
  },
};
</script>
