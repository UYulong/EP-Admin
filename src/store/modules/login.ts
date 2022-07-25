// 登录相关 store
import { defineStore } from "pinia";

const useLoginStore = defineStore({
  id: "login",

  state: () => {
    return {
      token: "",
    };
  },

  actions: {
    setCollapse(token: string) {
      console.log("store:", token);

      this.token = token;
    },
  },
});

export default useLoginStore;
