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
              visits: 6233,
              totalVisits: 190238,
              dayStatus: "up",
              dayPercent: 30,
              weekPercent: 20,
              weekStatus: "down",
            },
            {
              id: 1,
              type: "周",
              title: "下载量",
              visits: 345435,
              totalVisits: 923434,
              dayStatus: "up",
              dayPercent: 11,
              weekPercent: 20,
              weekStatus: "down",
            },
            {
              id: 2,
              type: "月",
              title: "订单量",
              visits: 23456,
              totalVisits: 235467,
              dayStatus: "down",
              dayPercent: 45,
              weekPercent: 18,
              weekStatus: "down",
            },
            {
              id: 3,
              type: "年",
              title: "成交额",
              visits: 4675685,
              totalVisits: 567689,
              dayStatus: "down",
              dayPercent: 64,
              weekPercent: 28,
              weekStatus: "up",
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
                desc: '本日交易额统计',
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
                desc: '本周交易额统计',
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
                desc: '本月交易额统计',
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
                desc: '本年交易额统计',
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

  {
    url: '/api/dashboard/workControl/projectList',
    method: 'get',
    response: ({headers}) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "数据获取成功!",
          data:  [
            {
              avatar_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
              name: '产品汪',
              slogan: '哥们，我改一个需求！',
              source: '产品组',
              time: '2042-10-01'
            },
            {
              avatar_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
              name: '运营喵',
              slogan: '上网冲浪中...',
              source: '运营组',
              time: '2042-10-01'
            },
            {
              avatar_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
              name: '程序猿',
              slogan: '这个需求我做不了！',
              source: '开发组',
              time: '2042-10-01'
            },
            {
              avatar_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
              name: '测试',
              slogan: '兄弟，你这又出bug了！',
              source: '测试组',
              time: '2042-10-01'
            },
            {
              avatar_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
              name: 'UI',
              slogan: '你是美工，你全家都是美工！',
              source: '开源组',
              time: '2042-10-01'
            },
            {
              avatar_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
              name: '甲方爸爸',
              slogan: '还是换成第一版吧！！！',
              source: 'xxx',
              time: '2042-10-01'
            }
          ],
        };
      }

      return {
        code: 1000,
        message: "用户token存在问题",
        data: null,
      };
    }
  },

  {
    url: '/api/dashboard/workControl/newsList',
    method: 'get',
    response: ({headers}) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "数据获取成功!",
          data: [
            {
              avatar_url: 'https://pic.imgdb.cn/item/6315b85b16f2c2beb166616f.png',
              name: '和尚',
              desc: `刚刚修改了一个bug，并推送到了 <a>fixbug</a> 分支`,
              time: '刚刚'
            },
            {
              avatar_url: 'https://pic.imgdb.cn/item/6315b83916f2c2beb1663b3a.png',
              name: '大彪',
              desc: `刚刚提交了后端代码到 <a>feature</a> 分支`,
              time: '10分钟前'
            },
            {
              avatar_url: 'https://pic.imgdb.cn/item/6315b85b16f2c2beb1666236.png',
              name: '老赵',
              desc: '开会讨论分解了需求，开始任务排期中...',
              time: '30分钟前'
            },
            {
              avatar_url: 'https://pic.imgdb.cn/item/6315b85b16f2c2beb1666188.png',
              name: '老李',
              desc: '需求太多啦，得加钱！',
              time: '10分钟前'
            },
            {
              avatar_url: 'https://pic.imgdb.cn/item/6315b85b16f2c2beb166618f.png',
              name: '旅长',
              desc: '这108个需求，明天中午12:00上线！',
              time: '3小时前'
            }
          ]
        };
      }

      return {
        code: 1000,
        message: "用户token存在问题",
        data: null,
      };
    }
  }
] as MockMethod[];
