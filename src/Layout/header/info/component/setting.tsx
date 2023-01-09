import { Setting } from "@element-plus/icons-vue";
import { useSetDrawer } from "@/store";

// 锁屏组件
export default defineComponent({
  setup(props, ctx) {
    const drawerStore = useSetDrawer();

    // 打开 抽屉
    const handleClickSetting = () => {
      drawerStore.setIsShow(true);
    };

    return () => (
      <el-tooltip
        class="box-item"
        effect="dark"
        content="项目配置"
        placement="bottom"
      >
        <el-icon size={24} onClick={handleClickSetting}>
          <Setting />
        </el-icon>
      </el-tooltip>
    );
  },
});
