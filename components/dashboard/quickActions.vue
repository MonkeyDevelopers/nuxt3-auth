<template>
  <Em1Board>
    <p class="text-xl font-normal text--primary">Quick Actions</p>

    <div>
      <div class="flex items-center gap-2">
        <div
          v-for="(action, index) in actions"
          :key="index"
          class="flex flex-col items-center justify-center h-28 w-28 bg-primary/30 rounded cursor-pointer hover:bg-primary/40"
        >
          <icon :name="action.icon" color="white" class="w-6 h-6" />
          <p class="text-center">
            {{ action.name }}
          </p>
        </div>
      </div>
    </div>
  </Em1Board>
</template>

<script setup lang="ts">
const actions = ref([
  {
    name: "Add User",
    icon: "heroicons:user-plus-20-solid",
    route: "/admin/users/create",
  },
  {
    name: "Add Daily Report",
    icon: "heroicons:calendar",
    route: "/admin/users/create",
  },
  {
    name: "Add Invoice",
    icon: "heroicons:document-plus",
    route: "/admin/users/create",
  },
]);
</script>
