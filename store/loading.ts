import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(value: boolean = false) {
      this.loading = value;
    },
  },
});
