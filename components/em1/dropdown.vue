<template>
  <div class="relative">
    <Em1Label :label="label" v-if="!isMenu" />
    <button
      v-if="isMenu"
      @click="toggleDropdown"
      :class="`flex items-center py-2 px-4 ${em1Class}`"
    >
      <slot v-if="isMenu"></slot>
      <icon name="mdi:chevron-down" />
    </button>
    <button
      v-else
      @click="toggleDropdown"
      :class="`flex items-center py-2 px-4 ${base}`"
    >
      <span>{{ selectedValue || placeholder }}</span>
      <icon name="mdi:chevron-down" />
    </button>
    <ul
      v-if="isOpen"
      :class="`absolute z-10 w-52 shadow-lg cursor-pointer ${base} ${itemClass}`"
    >
      <li
        v-for="(item, index) in options"
        class="my-2 px-4 py-2 hover:bg-gray-200 dark:text-black"
        :key="index"
        @click="selectItem(item)"
      >
        <icon :name="item?.icon" v-if="item.icon" class="mr-2" />
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const {
  label,
  options,
  placeholder,
  isMenu,
  em1Class,
  itemClass,
  notChangeValue,
} = defineProps<{
  label?: string;
  options: Array<any>;
  placeholder?: string;
  isMenu?: boolean;
  em1Class?: string;
  itemClass?: string;
  notChangeValue?: boolean;
}>();

const base = ` dark:bg-white border rounded ${em1Class}`;

const isOpen = ref(false);
const selectedValue = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const emit = defineEmits(["updateValue"]);

function onInput(e: any) {
  emit("updateValue", e.value);
}

const selectItem = (item: any) => {
  if (!notChangeValue) {
    selectedValue.value = item.value;
  }
  if (item.action) {
    item.action();
  }
  isOpen.value = false;
  onInput(item);
};

const clickOutside = (event: any) => {
  if (!isOpen.value || event.target.closest(".dropdown-menu")) {
    return;
  }

  isOpen.value = false;
};

document.addEventListener("click.outside", clickOutside);
</script>
