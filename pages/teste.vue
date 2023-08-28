<template>
  <div>
    <Em1Label :label="JSON.stringify(user)" />
    <div class="border-3 border-solid border-gray-200">
      <Em1InputText
        v-model="user.name"
        label="Username"
        placeholder="Enter Username"
      />
      <Em1InputPassword
        v-model="user.password"
        label="Password"
        placeholder="Enter Password"
      />

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
        <Em1CardH :data="data" />
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

    <div class="flex gap-2 bg-white/50">
      <Em1Dropdown v-model="user.selectedOption" label="Dropdown" :options="dropdownItems" placeholder="Select an option" />
      <Em1Dropdown v-model="user.selectedOption" :options="dropdownItems" isMenu> 
        Aqui vai um menu 10!
      </Em1Dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});

useNavInfoStore().setInfo("Examples");

const user = ref({
  name: "",
  password: "",
  selectedOption: null,
});

const country = ref("");

const countries = ref([
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
]);

const dropdownItems = ref([
  { text: "Option 1", icon: "heroicons:heart-20-solid" },
  { text: "Option 2", icon: "heroicons:heart-20-solid" },
  { text: "Option 3", icon: "heroicons:heart-20-solid" },
]);

const data = ref({
  title: "Views",
  description: "Total views",
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
