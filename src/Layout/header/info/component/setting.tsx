import { Setting } from "@element-plus/icons-vue";

// 锁屏组件
export default defineComponent({
  setup(props, ctx) {
    return () => (
      <el-tooltip
        class="box-item"
        effect="dark"
        content="项目配置"
        placement="bottom"
      >
        <el-icon size={24}>
          <Setting />
        </el-icon>
      </el-tooltip>
    );
  },
});
