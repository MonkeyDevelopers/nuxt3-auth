import { defineStore } from "pinia";

export const useNavInfoStore = defineStore("navInfo", {
  state: () => ({
    info: "",
    isMini: true,
  }),
  actions: {
    setInfo(value: string = "") {
      this.info = value;
    },
  },
});
