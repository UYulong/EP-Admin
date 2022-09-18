import requset from "utils/request";

enum Api {
  GET_BASIC_LIST = "/table/basicList",
}

const getBasicTableListData = () => {
  return requset({
    url: Api.GET_BASIC_LIST,
    method: "get"
  });
};

export { getBasicTableListData };
