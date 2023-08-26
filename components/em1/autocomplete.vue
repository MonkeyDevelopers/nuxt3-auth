<template>
  <div class="relative">
    <input
      v-model="searchTerm"
      @input="handleInput"
      class="w-full px-10 py-2 border rounded focus:outline-none focus:border-primary focus:text-primary"
      placeholder="Type to search..."
      @click="clickShowOptionn"
    />
    <icon
      name="heroicons:magnifying-glass-solid"
      class="absolute left-3 top-3 text-gray-400 pointer-events-none"
    />
    <ul
      v-if="showOptions"
      class="absolute w-full mt-2 border border-t-0 rounded-b bg-white"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        @click="selectOption(option)"
        class="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
      this.$emit('input', option); // Emitindo o valor selecionado para o v-model
    },
  },
};
</script>
