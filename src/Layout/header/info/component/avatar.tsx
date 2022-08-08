// 头像组件
export default defineComponent({
  props: {
    src: {
      type: String,
    },
  },

  setup(props, ctx) {
    return () => <el-avatar src={props.src} />;
  },
});
