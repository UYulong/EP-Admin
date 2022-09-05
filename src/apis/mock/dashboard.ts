import requset from "../../utils/request";

enum Api {
  GET_SUMMARY_LIST = "/dashboard/mainControl",
  GET_CHART_INFO = "/dashboard/mainControl/chartInfo",
  GET_PROJECT_LIST = "/dashboard/workControl/projectList",
  GET_NEWS_LIST = "/dashboard/workControl/newsList",
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

const getProjectListData = () => {
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

export { getSummaryListData, getChartInfoData, getProjectListData, getNewsListData };
