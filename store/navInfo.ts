import { defineStore } from "pinia";

export const useNavInfoStore = defineStore("navInfo", {
  state: () => ({
    info: "",
    mini: true,
    items: [
      {
        label: "Home",
        link: "/",
        icon: "heroicons:home-20-solid",
      },
      {
        label: "About",
        link: "/about",
        icon: "heroicons:user-20-solid",
      },
      {
        label: "Teste",
        link: "/teste",
        icon: "heroicons:light-bulb-solid",
      },
    ],
  }),
  actions: {
    setInfo(value: string = "") {
      this.info = value;
    },
  },
});
