import { defineComponent } from "vue";

// logo source
import logoSrc from "../../../assets/logo.svg";

// settings config
import { project_title } from "../../../utils/settings";

// css resource
import "./index.scss";

// import store
import { useSetCollapse } from "@/store";

export default defineComponent({
  setup(props, ctx) {
    const store = useSetCollapse();

    return () => (
      <div class={"logo_wrap"}>
        {/* logo */}
        <img class={"logo_wrap_img"} src={logoSrc}></img>

        {/* text */}
        <h1 v-show={!store.isCollapse} class={"logo_wrap_text"}>
          {project_title}
        </h1>
      </div>
    );
  },
});
