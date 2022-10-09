import { getAnimateListData } from 'apis/mock/animate'
import { animateOptionsModel } from 'models/animate.model'
import { Ref } from 'vue'

export const useAnimate = () => {
  // animate 动画列表
  const entrancesOptions: Ref<animateOptionsModel[]> = ref([])
  const exitsOptions: Ref<animateOptionsModel[]> = ref([])
  const otherOptions: Ref<animateOptionsModel[]> = ref([])

  const getAnimateList = async () => {
    const { data } = await getAnimateListData()
    const { entrances, exits, other } = data

    entrancesOptions.value = entrances
    exitsOptions.value = exits
    otherOptions.value = other
  }
  // 获取列表数据
  onMounted(() => {
    getAnimateList()
  })

  // animtate 样式值绑定
  const entrancesValue = ref('')
  const exitsValue = ref('')
  const otherValue = ref('')

  // 控制盒子是否显示
  const entrancesBoxIsShow = ref(true)
  const exitsBoxIsShow = ref(true)
  const otherBoxIsShow = ref(true)

  // 动画名称
  const entrancesName = ref('')
  const exitsName = ref('')
  const otherName = ref('')

  // 动画效果添加
  const app = getCurrentInstance()
  const handleAdd = (v: string) => {
    if (v === 'entrances') {
      if (!entrancesValue.value) {
        app?.appContext.config.globalProperties.$message({
          message: '请先选择动画效果！',
          type: 'warning'
        })
      } else {
        entrancesBoxIsShow.value = false
        // 已选择动画效果，添加
        entrancesName.value = entrancesValue.value
        nextTick(() => {
          entrancesBoxIsShow.value = true
        })
      }
    } else if (v === 'exits') {
      if (!exitsValue.value) {
        app?.appContext.config.globalProperties.$message({
          message: '请先选择动画效果！',
          type: 'warning'
        })
      } else {
        exitsBoxIsShow.value = false
        // 已选择动画效果，添加
        exitsName.value = exitsValue.value
        nextTick(() => {
          exitsBoxIsShow.value = true
        })
      }
    } else {
      if (!otherValue.value) {
        app?.appContext.config.globalProperties.$message({
          message: '请先选择动画效果！',
          type: 'warning'
        })
      } else {
        otherBoxIsShow.value = false
        // 已选择动画效果，添加
        otherName.value = otherValue.value
        nextTick(() => {
          otherBoxIsShow.value = true
        })
      }
    }
  }

  return {
    entrancesOptions,
    exitsOptions,
    otherOptions,

    entrancesValue,
    exitsValue,
    otherValue,

    entrancesBoxIsShow,
    exitsBoxIsShow,
    otherBoxIsShow,

    entrancesName,
    exitsName,
    otherName,

    handleAdd
  }
}
