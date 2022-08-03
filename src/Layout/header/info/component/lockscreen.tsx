import { Lock } from "@element-plus/icons-vue";

// 锁屏组件
export default defineComponent({
  setup(props, ctx) {
    return () => (
      <el-tooltip
        class="box-item"
        effect="dark"
        content="锁屏"
        placement="bottom"
      >
        <el-icon size={20}>
          <Lock />
        </el-icon>
      </el-tooltip>
    );
  },
});
