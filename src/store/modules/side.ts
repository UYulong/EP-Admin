// 控制左侧 侧边栏缩放
import { defineStore } from "pinia";

const useSetCollapse = defineStore({
  id: "side",

  state: () => {
    return {
      isCollapse: false,
      sideWidth: 200,
    };
  },

  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setSideWidth() {
      this.sideWidth === 200 ? (this.sideWidth = 63) : (this.sideWidth = 200);
    },
  },
});

export default useSetCollapse;
