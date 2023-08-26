<template>
  <label class="select-none dark:text-white" v-if="label">
    <b>{{ label }}</b>
  </label>
  <div class="relative mt-2">
    <Icon
      @mousedown.prevent
      @click="
        searchTerm = '';
        showOptions = false;
      "
      v-if="searchTerm"
      name="heroicons:x-mark-20-solid"
      class="absolute right-3 top-3 text-black dark:text-white h-6 w-6 cursor-pointer"
    />
    <input
      v-model="searchTerm"
      @input="handleInput"
      class="w-full dark:bg-black dark:text-white px-10 py-3 border rounded focus:outline-none focus:border-primary focus:text-primary dark:focus:text-white"
      placeholder="Type to search..."
      @click="clickShowOptionn"
    />
    <icon
      name="heroicons:magnifying-glass-solid"
      class="absolute left-3 top-3 text-gray-400 pointer-events-none h-6 w-6"
    />
    <ul
      v-if="showOptions"
      class="absolute w-full mt-2 border border-t-0 rounded-b bg-white dark:bg-black dark:text-white"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        @click="selectOption(option)"
        class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    label: String,
  },
  data() {
    return {
      searchTerm: "",
      showOptions: false,
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter((option) =>
        option.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    clickShowOptionn() {
      this.showOptions = true;
      this.filteredOptions = this.options;
    },
    handleInput() {
      this.showOptions = true;
    },
    selectOption(option) {
      this.searchTerm = option;
      this.showOptions = false;
      this.$emit("input", option); // Emitindo o valor selecionado para o v-model
    },
  },
};
</script>
