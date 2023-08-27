<template>
  <Em1CardH :data="data">
    <div class="flex gap-2 mt-1">
      <Em1Autocomplete v-model="period" :options="periods"/>
      <div class="flex gap-2 mt-1 items-center">
        <button
          class="h-8 w-8 rounded-full bg-primary/70 hover:bg-primary/30 flex justify-center items-center"
        >
          <Icon name="heroicons:arrow-long-left-20-solid" />
        </button>
        <button
          class="h-8 w-8 rounded-full bg-primary/70 hover:bg-primary/30 flex justify-center items-center"
        >
          <Icon name="heroicons:arrow-long-right-20-solid" />
        </button>
      </div>
    </div>
  </Em1CardH>
</template>

<script lang="ts" setup>
const data = ref({
  title: "Period",
  description: "Choose a period",
});

const period = ref("");
const periods = ref([
    "Week",
    "Month",
    "Year"
]);


</script>
