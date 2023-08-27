<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th v-for="(column, index) in headers" :key="index" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(item, rowIndex) in items" :key="item.id || rowIndex">
          <td v-for="(column, colIndex) in headers" :key="colIndex" class="px-6 py-4 whitespace-nowrap">
            <component
              :is="column.component || 'div'"
              v-if="!column.editable && !column.actions"
              v-bind="{
                item: item,
                value: column.key ? item[column.key] : null,
              }"
            >
              {{ column.customRender ? column.customRender(item) : (column.key ? item[column.key] : '') }}
            </component>
            <input
              v-else-if="column.editable"
              v-model="item[column.key]"
              class="w-full border rounded p-1"
            />
            <div v-else-if="column.actions" class="flex space-x-2">
              <button
                v-for="(action, actionIndex) in column.actions"
                :key="actionIndex"
                @click="action.handler(item)"
                class="text-blue-500 hover:underline cursor-pointer"
              >
                {{ action.label }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
  },
};
</script>