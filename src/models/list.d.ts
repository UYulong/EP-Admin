// 基础列表
export interface BaseListDataModel {
  name: string
  technology: [string]
  desc: string
  date: string
}

// 拖拽列表
export interface DragListDataModel {
  id: number,
  name: string
}

export interface DragPropsDataModel {
  modelValue: Array<DragListDataModel>
}