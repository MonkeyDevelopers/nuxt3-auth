<template>
  <Em1Board class="h-[90vh]">
    <p class="text-xl font-normal text--primary">Transaction History</p>
    <div
      class="pt-4 mt-4 space-y-2 font-medium border-t dark:text-white border-gray-700"
    >
      <DashboardTransactionHistoryCard
        v-for="(document, index) in documents"
        :key="index"
        :document="document"
      />
    </div>
  </Em1Board>
</template>

<script setup lang="ts">


const documents = ref([
  {
    title: "Invoice #2207",
    date: "10/10/2021",
    client: {
      name: "Caio Emidio",
      imageUrl: "https://github.com/caio-emidio.png",
    },
    value: 100,
    status: "pending",
  },
  {
    title: "Invoice #2208",
    date: "11/10/2021",
    client: {
      name: "sherlockzen",
      imageUrl: "https://github.com/sherlockzen.png",
    },
    value: 100,
    status: "paid",
  },
]);
</script>
