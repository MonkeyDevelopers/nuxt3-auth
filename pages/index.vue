<template>
  <div class="flex gap-4">
    <div class="w-2/3">
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap-reverse md:flex-wrap gap-4">
          <DashboardCardData :data="income" />
          <DashboardCardData :data="outcome" />
          <DashboardCardPeriod />
        </div>
        <DashboardQuickActions />
      </div>
    </div>
    <div class="w-1/3">
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
