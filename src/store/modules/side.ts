// 控制左侧 侧边栏缩放
import { defineStore } from "pinia";

const useSetCollapse = defineStore({
  id: "side",

  state: () => {
    return {
      isCollapse: false,
      sideWidth: 210,
    };
  },

  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setSideWidth() {
      this.sideWidth === 210 ? (this.sideWidth = 63) : (this.sideWidth = 210);
    },
  },
});

export default useSetCollapse;
