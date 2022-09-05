// 动态列表
import Avatar from "../../../../components/avatar/avatar";
import './style/news-list.scss';

export default defineComponent({
  name: 'NewsList',

  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },

    idx: {
      type: Number,
      default: 0
    },

    length: {
      type: Number,
      default: 0
    }
  },

  setup(props, ctx) {
    return () =>
      <div class={['news-list', props.idx === props.length - 1 ? 'is-last' : '']}>
        {/* 头像 */}
        <div class={'news-list__avatar'}>
          <Avatar src={props.info.avatar_url} />
        </div>

        {/* 文字 */}
        <div class={'news-list__text'}>
          <p class={'news-list__desc'}>
            <span class={'new-list__name'}>{props.info.name + '：'}</span>
            <span innerHTML={props.info.desc}></span>
          </p>
          <p class={'news-list__time'}>{props.info.time}</p>
        </div>
      </div>
  }
})