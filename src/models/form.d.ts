// 基础表单
export interface DepartmentDataModel {
  label: string
  value: string
}

export interface PostsDataModel {
  [key: string]: string[]
}

interface DepObjModel {
  [key: string]: string
}