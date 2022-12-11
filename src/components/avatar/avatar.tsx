// 头像组件
export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props, ctx) {
    return () => <el-avatar src={props.src} size={props.size} />;
  },
});
