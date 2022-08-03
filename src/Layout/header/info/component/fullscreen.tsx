import { FullScreen } from "@element-plus/icons-vue";

import { useFullscreen } from "@vueuse/core";
const { isFullscreen, toggle } = useFullscreen();

// 全屏功能
export default defineComponent({
  setup(props, ctx) {
    const handleToggleFullScreen = () => {
      toggle();
    };

    return () => (
      <el-tooltip
        class="box-item"
        effect="dark"
        content="点击全屏"
        placement="bottom"
      >
        <el-icon size={20} onClick={handleToggleFullScreen}>
          {isFullscreen ? <FullScreen /> : <FullScreen />}
        </el-icon>
      </el-tooltip>
    );
  },
});
