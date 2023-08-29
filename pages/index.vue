<template>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="md:w-2/3">
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-4">
          <DashboardCardData class="w-full md:w-1/3" :data="income" />
          <DashboardCardData class="w-full md:w-1/3" :data="outcome" />
          <DashboardCardPeriod class="w-full md:w-1/3"/>
        </div>
        <DashboardQuickActions />
      </div>
    </div>
    <div class="md:w-1/3">
      <DashboardTransactionHistory />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});

useNavInfoStore().setInfo("Dashboard");

const income = ref({
  title: "Income",
  value: Math.floor(Math.random() * 201) - 100,
  diff: Math.floor(Math.random() * 201) - 100,
  description: "This is a description",
});

const outcome = ref({
  title: "Outcome",
  value: Math.floor(Math.random() * 201) - 100,
  diff: Math.floor(Math.random() * 201) - 100,
  description: "This is a description",
});
</script>
