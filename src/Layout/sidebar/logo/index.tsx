import { defineComponent } from "vue";

// logo source
// import logoSrc from "../../../assets/logo.png";
import logoSrc from "../../../assets/logo.svg";

// settings config
import { project_title } from "../../../utils/settings";

// css resource
import "./index.scss";

// import store
import useSetCollapse from "../../../store/modules/side";

export default defineComponent({
  setup(props, ctx) {
    const store = useSetCollapse();

    return () => (
      <div class={"logo_wrap"}>
        <p class={"logo_wrap_img"}>
          <img src={logoSrc}></img>
        </p>

        <p v-show={!store.isCollapse} class={"logo_wrap_text"}>
          <span>{project_title}</span>
        </p>
      </div>
    );
  },
});
