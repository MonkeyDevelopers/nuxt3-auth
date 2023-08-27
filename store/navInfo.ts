import { defineStore } from "pinia";

export const useNavInfoStore = defineStore("navInfo", {
  state: () => ({
    info: "",
  }),
  actions: {
    setInfo(value: string = "") {
      this.info = value;
    },
  },
});
