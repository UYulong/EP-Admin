import { Fold } from "@element-plus/icons-vue";
import { useSetCollapse } from "@/store";
import { useRoute } from "vue-router";
import "./barCon.scss";

export default defineComponent({
  setup(props, ctx) {
    const store = useSetCollapse(); // store

    // 点击缩放icon时,切换状态
    const handleSwitchBar = () => {
      store.setCollapse();
      store.setSideWidth();
    };

    // 获取当前路由信息
    const route = useRoute();

    return () => (
      <div class={"bar_control_wrap"}>
        {/* 控制侧边栏缩放 icon */}
        <el-icon class={"bar_control_icon"} onclick={handleSwitchBar}>
          <Fold />
        </el-icon>

        {/* breadcrumb nav */}
        <el-breadcrumb separator="/">
          {route.matched.map((r) => (
            <el-breadcrumb-item>
              {r.meta.title ? r.meta.title : null}
            </el-breadcrumb-item>
          ))}
        </el-breadcrumb>
      </div>
    );
  },
});
