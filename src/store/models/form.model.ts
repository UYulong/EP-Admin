/**
 * @descripton 表单
 */
export interface DataModel {
  jobNum: number,
  name: string,
  idCard: string,
  sex: string,
  departmentVal: string,
  date: string,
  time: string,
  post: string[],
  remarks: string,
  [key: string]: string | string[] | number
}

 export interface BaseFormDataModel {
  formData: DataModel;
  isShow: boolean
}