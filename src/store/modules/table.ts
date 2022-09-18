// 控制项目配置 抽屉缩放
import { getBasicTableListData } from 'apis/mock/table'
import { defineStore } from 'pinia'
import { BasicTableDataModel, TableStoreModel } from '../models/table.model'

const useSetTable = defineStore({
  id: 'table',

  state: (): TableStoreModel => {
    return {
      basicTableData: [], // 表格渲染所需数据
      tableSize: 'default', // 表格间距
      tableIsEnableIndex: true, // 表格序号列是否显示
      tableIsEnableCheck: false, // 表格勾选列是否显示
      clearChecked: false, // 标记是否 执行一次清空勾选列勾选项

      // 表格表头数据
      tableHeaderItems: [
        {
          prop: 'date',
          label: 'Date',
          isShow: true
        },
        {
          prop: 'name',
          label: 'Name',
          isShow: true
        },
        {
          prop: 'state',
          label: 'State',
          isShow: true
        },
        {
          prop: 'city',
          label: 'City',
          isShow: true
        },
        {
          prop: 'address',
          label: 'Address',
          isShow: true,
          width: '300'
        },
        {
          prop: 'zip',
          label: 'Zip',
          isShow: true
        }
      ],
      // 缓存一份表头数据，以供重置使用
      cacheTableHeaderItems: [
        {
          prop: 'date',
          label: 'Date',
          isShow: true
        },
        {
          prop: 'name',
          label: 'Name',
          isShow: true
        },
        {
          prop: 'state',
          label: 'State',
          isShow: true
        },
        {
          prop: 'city',
          label: 'City',
          isShow: true
        },
        {
          prop: 'address',
          label: 'Address',
          isShow: true,
          width: '300'
        },
        {
          prop: 'zip',
          label: 'Zip',
          isShow: true
        }
      ]
    }
  },

  actions: {
    // 获取初始化数据
    async getBasicTableList() {
      const { data } = await getBasicTableListData()
      this.basicTableData = data
    },

    /**
     * 新增数据
     * @param payload 添加项
     */
    addItem(payload: BasicTableDataModel) {
      this.basicTableData.push(payload)
    },

    /**
     * 删除数据
     * @param payload 要删除的项的索引
     */
    deleteRow(payload: number) {
      this.basicTableData.splice(payload, 1)
    },

    /**
     * 设置表格
     * @param payload 设置表格大小的尺寸值
     */
    setTableSize(payload: string) {
      this.tableSize = payload
    },

    /**
     * 表格排列重置事件
     * @param null 无需参数
     */
    resetTable() {
      this.tableHeaderItems = JSON.parse(
        JSON.stringify(this.cacheTableHeaderItems)
      )

      this.tableIsEnableIndex = true
      this.tableIsEnableCheck = false

      this.clearChecked = true
    }
  }
})

export default useSetTable
