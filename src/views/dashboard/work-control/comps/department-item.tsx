import Avatar from "../../../../components/avatar/avatar"; // 头像组件
import './style/department-item.scss'; // css

export default defineComponent({
  name: 'ProjectItem',

  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  setup(props, ctx) {
    return () => (
      <div class={'project-item__box'} >
        {/* avatar */}
        <div class={'project-item__avatar'}>
          <Avatar src={props.info.avatar_url} />
          <span class={'project-item__name'}>{props.info.name}</span>
        </div>

        {/* slogan */}
        <p class={'project-item__slogan'}>{props.info.slogan}</p>

        {/* time */}
        <p class={'project-item__time'}>
          <span>{props.info.source}</span>
          <span>{props.info.time}</span>
        </p>
      </div>
    )
  }
})