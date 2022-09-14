<template>
  <Transition name="fade">
    <ul 
      v-if="isShow" 
      class="base-form__data-source"
    >
      <li>
        <span class="index"> 1 |</span>  工号：{{ formList.jobNum }}
      </li>
      <li>
        <span class="index"> 2 |</span>  姓名：{{ formList.name }}
      </li>
      <li>
        <span class="index"> 3 |</span>  身份证：{{ formList.idCard }}
      </li>
      <li>
        <span class="index"> 4 |</span>  性别：{{ formList.sex }}
      </li>
      <li>
        <span class="index"> 5 |</span>  所属部门：{{ handleDepartment(formList.departmentVal) }}
      </li>
      <li>
        <span class="index"> 7 |</span>  岗位名称：{{ handlePosts(formList.post) }}
      </li>
      <li>
        <span class="index"> 6 |</span>  生效时间：{{ handleTime(formList.time) }}
      </li>
      <li>
        <span class="index"> 8 |</span>  备注信息：{{ formList.remarks }}
      </li>
    </ul>
  </Transition>
</template>

<script lang="ts" setup name='CompsData'>
import { DepObjModel } from '../../../../../models/form';
import useSetForm from '../../../../../store/modules/form';
import { getTime } from '../../../../../utils/time';

const store = useSetForm()

// 数据
const formList = computed(() => {
  return store.formData
})

// 是否显示
const isShow = computed(() => {
  return store.isShow
})

const depObj: DepObjModel = {
  rd: '研发部',
  mktg: '市场营销部',
  finance: '财务部',
  hrd: '人力资源部',
  logistics: '后勤保障部',
}

// 处理部门名称显示
const handleDepartment = (dep: string) => {
  return depObj[dep]
}

// 处理岗位名称显示
const handlePosts = (post: string[]): string => {
  const reg = new RegExp(',', 'g')
  return post.join(',').replace(reg, ' | ')
}

// 处理时间显示
const handleTime = (time: any): string => {
  return getTime(new Date(time).getTime())
}
</script>

<style lang="scss" scoped>
.base-form__data-source {
  padding: 15px 20px;
  background-color: #2a2c32;
  border-radius: 3px;
  height: 425px;
  user-select: none;
  color: #CFD3DC;

  li {
    height: 50px;
    line-height: 50px;

    .index {
      margin-right: 10px;
    }
  }
}

// 过度动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>