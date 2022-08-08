// 控制项目配置 抽屉缩放
import { defineStore } from "pinia";
import { DrawerStateModel } from "../models/drawer.model";

const useSetDrawer = defineStore({
  id: "drawer",

  state: (): DrawerStateModel => {
    return {
      isShow: false,
    };
  },

  actions: {
    setIsShow(payload: boolean) {
      this.isShow = payload;
    },
  },
});

export default useSetDrawer;
