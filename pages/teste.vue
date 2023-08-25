<template>
  <div class="flex">
    <div :class="baseClass">
      <div :class="menuClass">
        <slot> </slot>
        <ul class="space-y-2 font-medium border-t border-gray-700">
          <li :class="mini ? 'flex p-2' : 'flex justify-between p-2'">
            <icon
              name="heroicons:bars-4-20-solid"
              class="h-6 w-6 text-white"
              @click="this.mini = !this.mini"
            ></icon>
          </li>
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.link" :class="optionsClass">
              <Icon :name="item.icon" class="h-6 w-6" />
              <span v-if="this.mini">{{ item.label }}</span>
            </a>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.link" :class="optionsClass">
              <Icon :name="item.icon" class="h-6 w-6" />
              <span v-if="this.mini">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full">
      <Em1Navbar> Oi </Em1Navbar>
      <div class="px-2 py-2">Oi Cara</div>
    </div>
  </div>
</template>
<script>
export default {
  // props: {
  //   items: {
  //     type: Array,
  //   },
  // },

  data() {
    return {
      mini: true,
      items: [
        {
          label: "Home",
          link: "/",
          icon: "heroicons:home-20-solid",
        },
        {
          label: "About",
          link: "/about",
          icon: "heroicons:user-20-solid",
        },
        {
          label: "Teste",
          link: "/teste",
          icon: "heroicons:light-bulb-solid",
        },
      ],
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
      const base = "h-full overflow-y-auto bg-gray-800";
      if (this.mini) {
        return `${base} px-3 py-4`;
      }
      return `${base}`;
    },
  },
};
</script>
