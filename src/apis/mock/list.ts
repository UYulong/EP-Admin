import requset from "../../utils/request";

enum Api {
  GET_BASE_LIST = "/list/getBaseList",
  GET_DRAG_LIST = "/list/getDragList",
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
  return requset({
    url: Api.GET_DRAG_LIST,
    method: "get",
  });
}

export {
  getBaseListData,
  getDragListData
};
