import requset from "../../utils/request";

enum Api {
  GET_BASE_LIST = "/list/getBaseList",
}

// 获取基础列表
const getBaseListData = () => {
  return requset({
    url: Api.GET_BASE_LIST,
    method: "get",
  });
};

// 获取拖动列表
const getDragListData = () => {
  
}

export {
  getBaseListData
};
