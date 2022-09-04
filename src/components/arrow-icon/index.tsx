import { CaretBottom, CaretTop } from "@element-plus/icons-vue"
import './index.scss'

export default defineComponent({
  name: 'ArrowIcon',

  props: {
    trend: {
      type: String,
      default: ''
    }
  },

  setup(props, ctx) {
    const filterIcon = (trend?: string) => {
      if (trend === 'up') {
        return <el-icon class={'up-icon'}><CaretTop /></el-icon>
      }
      return <el-icon class={'down-icon'}><CaretBottom /></el-icon>
    }

    return () => (
      filterIcon(props.trend)
    )
  }
})