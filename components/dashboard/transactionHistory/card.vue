<template>
  <div class="flex gap-2 justify-between items-center">
    <div class="flex gap-2">
      <Em1Avatar
        icon="heroicons:receipt-percent"
        :class="`${setColor(document.status)}`"
        iconColor="white"
      />
      <div class="flex flex-col">
        <p class="font-bold text-lg">
          {{ document.title }}
          <span class="text-sm text-gray-400">{{ document.date }}</span>
        </p>
        <div class="flex gap-2">
          <Em1Avatar
            :imageUrl="document.client.imageUrl"
            :class="`bg-primary/30 h-6 w-6 text-xs`"
          />
          <p>{{ document.client.name }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end">
      <p class="text-sm dark:text-gray-400 text-end">
        {{ showPrice(document.value) }}
      </p>
      <div>
        <Em1Tag :color="tagColor(document.status)" class="text-xs">{{
          document.status
        }}</Em1Tag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { document } = defineProps<{
  document: {
    title: string;
    date: string;
    client: {
      name: string;
      imageUrl: string;
    };
    value: string;
    status: string;
  };
}>();

const tagColor = (status: string) => {
  switch (status) {
    case "paid":
      return "success";
    case "pending":
      return "warning";
    case "canceled":
      return "error";
    default:
      return "primary";
  }
};

const setColor = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-green-400";
    case "pending":
      return "bg-yellow-400";
    case "canceled":
      return "bg-red-400";
    default:
      return "bg-primary/30 ";
  }
};

const showPrice = (value: string) => {
  value = parseFloat(value).toFixed(2);
  return "€ " + value;
};
</script>
