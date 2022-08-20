import requset from "../../utils/request";

enum Api {
  GET_SUMMARY_LIST = "/dashboard/mainControl",
  GET_CHART_INFO = "/dashboard/mainControl/chartInfo",
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
export { getSummaryListData, getChartInfoData };
