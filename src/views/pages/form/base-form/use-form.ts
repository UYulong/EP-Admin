import type { FormInstance, FormRules } from 'element-plus';
import { Ref } from 'vue';
import { DepartmentDataModel, PostsDataModel } from '../../../../models/form';
import useSetForm from '../../../../store/modules/form';
import { regExpIdCard, regExpName } from '../../../../utils/libs/regExp';


const departments: Array<DepartmentDataModel> = [
  {label: '研发部', value: 'rd'},
  {label: '市场营销部', value: 'mktg'},
  {label: '财务部', value: 'finance'},
  {label: '人力资源部', value: 'hrd'},
  {label: '后勤保障部', value: 'logistics'},
]

const posts: PostsDataModel = {
  rd: ['产品经理', 'UI设计师', '前端工程师', '后端工程师', '测试', '实习生'], // 研发
  mktg: ['企册专员', '市场调研专员', '产品专员', '广告专员', '促销专员'], // 市场
  finance: ['预算专员', '税务专员', '核算专员', '出纳员', '收银员',], // 财务部
  hrd: ['招聘专员', '培训专员', '绩效专员', '薪酬专员', '规划专员', '文化专员'], // 人力资源部
  logistics: ['环卫组', '医务室', '食堂'] // 后勤保障部
}

// 校验身份证号码
const validateIdCard = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入身份证号码'))
  } else if (!regExpIdCard.test(value)) {
    callback(new Error("请输入合法的身份证号码"))
  } else {
    callback()
  }
}

// 校验姓名
const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入姓名'))
  } else if (!regExpName.test(value)) {
    callback(new Error("姓名长度为2～6位汉字"))
  } else {
    callback()
  }
}

export const useForm = () => {
  const baseFormRef = ref<FormInstance>()
  const store = useSetForm()
  const post: Ref<string[]> = ref(['产品经理', 'UI设计师', '前端工程师', '后端工程师', '测试', '实习生'])

  // 数据绑定
  const baseFormData = reactive({
    jobNum: 0,
    name: '老六',
    idCard: '130121199810211022',
    departmentVal: 'rd',
    date: '',
    time: '',
    post: [],
    sex: '',
    remarks: '',
  })

  // 校验规则
  const baseFormRules = reactive<FormRules>({
    jobNum: [
      { required: true, message: '请输入工号', trigger: 'blur' },
      { type: 'number', message: '工号必须是数字' },
    ],
    name: [
      { validator: validateName, trigger: 'blur' },
      { required: true, trigger: 'blur' },
    ],
    idCard: [
      { required: true, trigger: 'blur' },
      { validator: validateIdCard, trigger: 'blur' },
    ],
    departmentVal: [
      { required: true, message: '请选择员工所属部门', trigger: 'change', },
    ],
    date: [
      {
        type: 'date',
        required: true,
        message: '请选择日期',
        trigger: 'change',
      },
    ],
    time: [
      {
        type: 'date',
        required: true,
        message: '请选择时间',
        trigger: 'change',
      },
    ],
    post: [
      {
        type: 'array',
        required: true,
        message: '请选择岗位名称',
        trigger: 'change',
      },
    ],
    sex: [
      {
        required: true,
        message: '请选择性别',
        trigger: 'change',
      },
    ],
  })

  // 提交
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        
        store.setFormData(baseFormData) // 提交数据
        store.setIsShow(true) // 设置右侧数据为显示状态
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  // 重置
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    store.setIsShow(false)
  }

  // 监听 部门选择列表 选值
  const handleDepartmentChangeEvent = (val: string) => {
    baseFormData.post = []
    post.value = posts[val]
  }

  return {
    departments,
    post,
    baseFormRef,
    baseFormData,
    baseFormRules,
    handleDepartmentChangeEvent,
    submitForm,
    resetForm
  }
}