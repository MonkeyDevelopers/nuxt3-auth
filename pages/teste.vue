<template>
  <div>
    <div class="border-3 border-solid border-gray-200">
      <Em1InputText label="Username" placeholder="Enter Username" />
      <Em1InputPassword label="Password" placeholder="Enter Password" />

      <Em1Avatar
        name="Caio"
        imageUrl="https://github.com/caio-emidio.png"
        class="bg-primary text-white"
      />

      <div class="flex gap-2">
        <Em1Tag>Default</Em1Tag>
        <Em1Tag color="primary">Primary</Em1Tag>
        <Em1Tag color="success">Success</Em1Tag>
        <Em1Tag color="info">Info</Em1Tag>
        <Em1Tag color="warning">Warning</Em1Tag>
        <Em1Tag color="error">Error</Em1Tag>
      </div>

      <div class="mt-4">
        <Em1Button class="bg-primary hover:bg-primaryDark">Login</Em1Button>
      </div>

      <div class="flex gap-2">
        <Em1CardH :data="data" />
        <Em1CardH :data="data2" />
      </div>

      <div>
        <h1 class="text-2xl font-bold mb-4">Generic Autocomplete Example</h1>
        <Em1Autocomplete v-model="country" :options="countries" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});

const country = ref("");

const countries = ref([
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
]);

const data = ref({
  title: "Views",
  value: Math.floor(Math.random() * 201) - 100,
  diff: Math.floor(Math.random() * 201) - 100,
});

const data2 = ref({
  title: "Views",
  value: Math.floor(Math.random() * 201) - 100,
  diff: Math.floor(Math.random() * 201) - 100,
});
</script>
