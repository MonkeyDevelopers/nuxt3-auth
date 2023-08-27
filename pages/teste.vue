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
        <Em1Autocomplete
          v-model="country"
          :options="countries"
          label="Generic Autocomplete Example"
        />
      </div>
    </div>
    <div class="mt-8">
      <Em1Table :headers="headers" :items="items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});

useNavInfoStore().setInfo("Examples");

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

const headers = ref([
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  {
    label: "Custom Price",
    component: "span",
    editable: false,
    key: "price",
  },
  {
    label: "Modified Price",
    component: "span",
    editable: false,
    key: null,
    customRender: (item: { price: number }) => item.price * 100,
  },
  {
    label: "Actions",
    component: "div",
    editable: false,
    actions: [
      {
        label: "Edit",
        handler: (item: any) => console.log(item),
      },
      {
        label: "Delete",
        handler: (item: any) => console.log(item),
      },
    ],
  },
]);

const items = ref([
  { id: 1, name: "John", price: 20 },
  { id: 2, name: "Jane", price: 30 },
  // Add more items as needed
]);
</script>
