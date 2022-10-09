import requset from 'utils/request'

enum Api {
  GET_ANIMATE_LIST = '/list/getAnimateList'
}

// 获取基础列表
const getAnimateListData = () => {
  return requset({
    url: Api.GET_ANIMATE_LIST,
    method: 'get'
  })
}

export { getAnimateListData }
