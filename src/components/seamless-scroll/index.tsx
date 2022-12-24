import { templateRef } from "@vueuse/core";
import { CSSProperties } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },

  setup(props, { slots }) {
    let xPos = ref<number>(0);
    let yPos = ref<number>(0);
    let delay = ref<number>(0);

    let height = ref<number>(0);
    let width = ref<number>(0);

    let realBoxWidth = ref<number>(0);
    let realBoxHeight = ref<number>(0);

    let ease = "ease-in";
    let autoPlay = ref(true)
    let copyHtml = ref('')

    const wrap = ref<HTMLElement | null>();
    const slotList = ref<HTMLElement | null>();
    const realBox = ref<HTMLElement | null>();

    let pos = computed(() => {
      return {
        transform: `translate(${unref(xPos)}px,${unref(yPos)}px)`,
        transition: `all ${ease} ${unref(delay)}ms`,
        overflow: "hidden"
      };
    });

    let float = computed((): CSSProperties => {
      return { float: "left", overflow: "hidden" }
    });

    // 鼠标移入事件
    const handleMouseEnterEvent = () => {
      console.log('enter');
    }

    // 鼠标移出事件
    const handleMouseLeaveEvent = () => {
      console.log('leave');
    }

    // 重置事件
    const reset = () => {
      xPos.value = 0;
      yPos.value = 0;
      scrollCancle();
      scrollInitMove();
    }


    function scrollInitMove() {
      nextTick(() => {
        //清空copy
        copyHtml.value = "";
        if (true) {
          height.value = unref(wrap).offsetHeight;
          width.value = unref(wrap).offsetWidth;
          console.log(width.value);

          let slotListWidth = unref(slotList).offsetWidth;
          // 水平滚动设置warp width
          if (unref(autoPlay)) {
            // 修正offsetWidth四舍五入
            slotListWidth = slotListWidth * 2 + 1;
          }
          unref(realBox).style.width = slotListWidth + "px";
          realBoxWidth.value = slotListWidth;

        }

        if (unref(autoPlay)) {
          ease = "ease-in";
          delay.value = 0;
        }
      });
    }



    // 声明周期钩子函数
    onMounted(() => {
      scrollInitMove()
      // console.log(wrap.value);

    })

    return () => {
      const content = slots.default ? slots.default() : '暂无数据'
      return (
        <div ref={wrap}>
          <div
            class={'seamless-container'}
            style={pos.value}
            ref={realBox}
            onMouseenter={handleMouseEnterEvent}
            onMouseleave={handleMouseLeaveEvent}
          >
            <div ref={slotList} style={float.value}>
              {content}
            </div>
          </div>
        </div>

      )

    }
  }
})
