import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(value: boolean = false) {
      this.loading = value;
    },
    setLoadingByTime(value: boolean = false, time: number = 1000) {
      this.loading = value;
      setTimeout(() => {
        this.loading = false;
      }, time);
    },
  },
});
