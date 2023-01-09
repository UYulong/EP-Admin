// 分布表单
import { defineStore } from "pinia";
import { BaseFormDataModel, DataModel } from "../models/form.model";

const useSetForm = defineStore({
  id: "form",

  state: (): BaseFormDataModel => {
    return {
      formData: {
        jobNum: 0,
        name: '老六',
        idCard: '130121199810211022',
        departmentVal: '',
        date: '',
        time: '',
        post: [],
        sex: '',
        remarks: '',
      },

      isShow: false,
    };
  },

  actions: {
    // 设置数据
    setFormData(payload: DataModel) {
      Object.keys(payload).forEach(item => {
        this.formData[item] = payload[item]
      })
    },

    setIsShow(payload: boolean) {
      this.isShow = payload
    },

    // 清除数据
    removeFormData() {}
  },
});

export default useSetForm;
