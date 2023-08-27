<template>
  <Em1CardH class="min-w-[340px]" :data="data">
    <span class="font-bold text-3xl"> {{ data.value }} </span>
    <Em1Tag class="ml-2" :color="data.diff > 0 ? 'success' : 'error'">
      {{ data.diff }}
      <Icon
        :name="
          data.diff > 0
            ? 'heroicons:arrow-up-right-20-solid'
            : 'heroicons:arrow-down-right-20-solid'
        "
      />
    </Em1Tag>
  </Em1CardH>
</template>

<script lang="ts" setup>
const { data } = defineProps<{
  data: {
    title: string;
    value: number;
    diff: number;
    description?: string;
  };
}>();
</script>
