import { MockMethod } from "vite-plugin-mock";

const userToken = "EP_ADMIN_TOKEN";

export default [
  {
    url: "/api/dashboard/mainControl",
    method: "get",
    response: ({ headers }) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "数据获取成功!",
          data: [
            {
              id: 0,
              type: "日",
              title: "访问量",
              visits: "66233",
              totalVisits: "190238",
              dayStatus: "up",
              dayPercent: "30%",
              weekPercent: "20%",
              weekStatus: "down",
            },
            {
              id: 1,
              type: "周",
              title: "销售额",
              visits: "345435",
              totalVisits: "23434",
              dayStatus: "up",
              dayPercent: "30%",
              weekPercent: "20%",
              weekStatus: "down",
            },
            {
              id: 2,
              type: "月",
              title: "订单量",
              visits: "4675685",
              totalVisits: "235467",
              dayStatus: "up",
              dayPercent: "30%",
              weekPercent: "20%",
              weekStatus: "down",
            },
            {
              id: 3,
              type: "年",
              title: "成交额",
              visits: "23456",
              totalVisits: "567689",
              dayStatus: "up",
              dayPercent: "30%",
              weekPercent: "20%",
              weekStatus: "down",
            },
          ],
        };
      }
      return {
        code: 1000,
        message: "用户token存在问题！",
        data: null,
      };
    },
  },

  {
    url: "/api/dashboard/mainControl/chartInfo",
    method: "get",
    response: ({ headers }) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "数据获取成功!",
          data: {
            dayS: {
              pieData: {
                desc: "本日活跃用户数量",
                data: [
                  {
                    value: 10,
                    name: "WeChat",
                  },
                  {
                    value: 5,
                    name: "BiliBili",
                  },
                  {
                    value: 15,
                    name: "QQ",
                  },
                  {
                    value: 25,
                    name: "FaceBook",
                  },
                  {
                    value: 20,
                    name: "Tiktok",
                  },
                  {
                    value: 35,
                    name: "NTES",
                  },
                  {
                    value: 30,
                    name: "SINA",
                  },
                ],
              },
              lineData: {
                xAxisData: [
                  "WeChat",
                  "BiliBili",
                  "QQ",
                  "FaceBook",
                  "Tiktok",
                  "NTES",
                  "SINA",
                ],

                yAxisData: {
                  salesVolume: [12, 23, 34, 22, 67, 12, 33],
                  NetProfit: [1, 12, 23, 20, 45, 5, 22],
                },
              },
            },

            weekS: {
              pieData: {
                desc: "本周活跃用户数量",
                data: [
                  {
                    value: 20,
                    name: "WeChat",
                  },
                  {
                    value: 15,
                    name: "BiliBili",
                  },
                  {
                    value: 5,
                    name: "QQ",
                  },
                  {
                    value: 23,
                    name: "FaceBook",
                  },
                  {
                    value: 40,
                    name: "Tiktok",
                  },
                  {
                    value: 34,
                    name: "NTES",
                  },
                  {
                    value: 13,
                    name: "SINA",
                  },
                ],
              },

              lineData: {
                xAxisData: [
                  "WeChat",
                  "BiliBili",
                  "QQ",
                  "FaceBook",
                  "Tiktok",
                  "NTES",
                  "SINA",
                ],

                yAxisData: {
                  salesVolume: [120, 230, 322, 244, 500, 324, 109],
                  NetProfit: [99, 217, 301, 190, 444, 289, 88],
                },
              },
            },

            monthS: {
              pieData: {
                desc: "本月活跃用户数量",
                data: [
                  {
                    value: 12,
                    name: "WeChat",
                  },
                  {
                    value: 8,
                    name: "BiliBili",
                  },
                  {
                    value: 23,
                    name: "QQ",
                  },
                  {
                    value: 12,
                    name: "FaceBook",
                  },
                  {
                    value: 19,
                    name: "Tiktok",
                  },
                  {
                    value: 33,
                    name: "NTES",
                  },
                  {
                    value: 24,
                    name: "SINA",
                  },
                ],
              },
              lineData: {
                xAxisData: [
                  "WeChat",
                  "BiliBili",
                  "QQ",
                  "FaceBook",
                  "Tiktok",
                  "NTES",
                  "SINA",
                ],

                yAxisData: {
                  salesVolume: [234, 556, 156, 790, 190, 359, 687],
                  NetProfit: [188, 456, 134, 666, 121, 311, 499],
                },
              },
            },

            yearS: {
              pieData: {
                desc: "本年活跃用户数量",
                data: [
                  {
                    value: 1,
                    name: "WeChat",
                  },
                  {
                    value: 8,
                    name: "BiliBili",
                  },
                  {
                    value: 19,
                    name: "QQ",
                  },
                  {
                    value: 5,
                    name: "FaceBook",
                  },
                  {
                    value: 13,
                    name: "Tiktok",
                  },
                  {
                    value: 8,
                    name: "NTES",
                  },
                  {
                    value: 13,
                    name: "SINA",
                  },
                ],
              },
              lineData: {
                xAxisData: [
                  "WeChat",
                  "BiliBili",
                  "QQ",
                  "FaceBook",
                  "Tiktok",
                  "NTES",
                  "SINA",
                ],

                yAxisData: {
                  salesVolume: [1122, 3456, 2376, 1290, 2278, 2150, 1960],
                  NetProfit: [1100, 3123, 2145, 1024, 2156, 1907, 1567],
                },
              },
            },
          },
        };
      }

      return {
        code: 1000,
        message: "用户token存在问题",
        data: null,
      };
    },
  },
] as MockMethod[];
