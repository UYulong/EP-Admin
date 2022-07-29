import { Fold } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import useSetCollapse from "../../../store/modules/side";
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
    // console.log(route);

    return () => (
      <div class={"bar_control_wrap"}>
        {/* 控制侧边栏缩放 icon */}
        <el-icon class={"bar_control_icon"} onclick={handleSwitchBar}>
          <Fold />
        </el-icon>

        {/* breadcrumb nav */}
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    );
  },
});
