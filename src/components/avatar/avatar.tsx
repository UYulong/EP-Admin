// 头像组件
export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    },
  },

  setup(props, ctx) {
    return () => <el-avatar src={props.src} />;
  },
});
