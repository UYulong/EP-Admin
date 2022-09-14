import { getDragListData } from 'apis/mock/list';
import { DragListDataModel } from 'models/list';
import { Ref } from 'vue';

export const useDragList = () => {
  // 上下拖动 - 数据管理
  let cacheSnowPoemsList: Array<DragListDataModel> = [] // 缓存源数据
  const poemsSnowSourceList: Ref<DragListDataModel[]> = ref([]) // 上下拖动组件数据

  // 左右拖动 - 数据管理
  let cachePoemsLeft: DragListDataModel[] = []
  const poemsLeftSourceData: Ref<DragListDataModel[]> = ref([])

  let cachePoemsRight: DragListDataModel[] = []
  const poemsRightSourceData: Ref<DragListDataModel[]> = ref([])

  // 请求接口
  const getDragList = async () => {
    const { data } = await getDragListData()
    const { leftPoems, rigtPoems } = data

    const {left, right} = rigtPoems
    
    cacheSnowPoemsList= JSON.parse(JSON.stringify(leftPoems))
    poemsSnowSourceList.value = leftPoems

    cachePoemsLeft = JSON.parse(JSON.stringify(left))
    poemsLeftSourceData.value = left

    cachePoemsRight = JSON.parse(JSON.stringify(right))
    poemsRightSourceData.value = right
  }

  onMounted(() => {
    getDragList()
  })

  // 还原排序
  const handleRestoreEvent = (name: string) => {
    if (name === 'upAndDown') {
      poemsSnowSourceList.value = JSON.parse(JSON.stringify(cacheSnowPoemsList))
    } else {
      poemsLeftSourceData.value = JSON.parse(JSON.stringify(cachePoemsLeft))
      poemsRightSourceData.value = JSON.parse(JSON.stringify(cachePoemsRight))
    }
  }

  return {
    poemsSnowSourceList,
    poemsLeftSourceData,
    poemsRightSourceData,
    handleRestoreEvent,
  }
}