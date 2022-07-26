import requset from "utils/request";

enum Api {
  GET_SUMMARY_LIST = "/dashboard/mainControl",
  GET_CHART_INFO = "/dashboard/mainControl/chartInfo",
  GET_PROJECT_LIST = "/dashboard/workControl/projectList",
  GET_NEWS_LIST = "/dashboard/workControl/newsList",
  GET_SUMMARY_CHART = "/dashboard/workControl/output",
}

const getSummaryListData = () => {
  return requset({
    url: Api.GET_SUMMARY_LIST,
    method: "get",
  });
};

const getChartInfoData = () => {
  return requset({
    url: Api.GET_CHART_INFO,
    method: "get",
  });
};

const getDepartmentListData = () => {
  return requset({
    url: Api.GET_PROJECT_LIST,
    method: "get",
  });
};

const getNewsListData = () => {
  return requset({
    url: Api.GET_NEWS_LIST,
    method: "get",
  });
};

const getOutputListData = () => {
  return requset({
    url: Api.GET_SUMMARY_CHART,
    method: "get",
  });
};

export {
  getSummaryListData,
  getChartInfoData,
  getDepartmentListData,
  getNewsListData,
  getOutputListData
};

