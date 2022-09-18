import { TableHeaderItemsModel } from 'models/table.model'

/**
 * @descripton 表单
 */
export interface BasicTableDataModel {
  date: string
  name: string
  state: string
  city: string
  address: string
  zip: string
}

export interface TableStoreModel {
  basicTableData: BasicTableDataModel[]
  tableSize: string
  tableIsEnableIndex: boolean
  tableIsEnableCheck: boolean
  clearChecked: boolean
  tableHeaderItems: TableHeaderItemsModel[]
  cacheTableHeaderItems: TableHeaderItemsModel[]
}
