<template>
  <div
    class="flex flex-col dark:text-white dark:bg-black gap-2 box-border border border-solid border-gray-300 w-52 rounded"
  >
    <div class="p-4">
      <p class="font-light">{{ data.title }}</p>
      <p class="flex items-center">
        <span class="font-bold text-3xl"> {{ data.value }} </span>
        <Em1Tag class="ml-2" :color="data.diff > 0 ? 'success' : 'error'">
          {{ data.diff }} <Icon :name="data.diff>0 ? 'heroicons:arrow-up-right-20-solid' : 'heroicons:arrow-down-right-20-solid'" />
        </Em1Tag>
      </p>
      <p class="text-sky-700 font-extralight">Views(7 Days)</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: {
    title: string;
    value: number;
    diff: number;
  };
}>();

const { data } = props;
</script>
