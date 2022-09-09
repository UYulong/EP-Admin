import { MockMethod } from "vite-plugin-mock";

const userToken = "EP_ADMIN_TOKEN";

export default [
  {
    url: "/api/list/getBaseList",
    method: "get",
    response: ({ headers }) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "数据获取成功!",
          data: [
            {
              name: 'Tom',
              technology: ['Vue', 'React', 'Node'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-01'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '小李',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
            {
              name: 'Tom',
              technology: ['Vue', 'React', 'Node'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-01'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '小李',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
            {
              name: 'Tom',
              technology: ['Vue', 'React', 'Node'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-01'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '小李',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
            {
              name: 'Tom',
              technology: ['Vue', 'React', 'Node'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-01'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '小李',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
            {
              name: 'Tom',
              technology: ['Vue', 'React', 'Node'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-01'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '小李',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '小李',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
            {
              name: 'Jerry',
              technology: ['Angular', 'PHP'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2022-10-02',
            },
            {
              name: '小王',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2021-10-02',
            },
            {
              name: '大聪明',
              technology: ['Java', 'JQuery', 'HTML'],
              desc: 'No. 189, Grove St, Los Angeles',
              date: '2020-11-11'
            },
          ]
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
    url: '/api/list/getDragList',
    method: 'get',
    response: ({headers}) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "数据获取成功!",
          data:  {
            leftPoems: [
              {
                id: 0,
                name: '独立寒秋，湘江北去，橘子洲头。'
              },
              {
                id: 1,
                name: '看万山红遍，层林尽染；漫江碧透，百舸争流。'
              },
              {
                id: 2,
                name: '鹰击长空，鱼翔浅底，万类霜天竞自由。'
              },
              {
                id: 3,
                name: '怅寥廓，问苍茫大地，谁主沉浮？'
              },
              {
                id: 4,
                name: '携来百侣曾游，忆往昔峥嵘岁月稠。'
              },
              {
                id: 5,
                name: '恰同学少年，风华正茂；书生意气，挥斥方遒。'
              },
              {
                id: 6,
                name: '指点江山，激扬文字，粪土当年万户侯。'
              },
              {
                id: 7,
                name: '曾记否，到中流击水，浪遏飞舟？'
              },
            ],
            rigtPoems: {
              left: [
                {
                  id: 0,
                  name: '钟山风雨起苍黄'
                },
                {
                  id: 1,
                  name: '百万雄师过大江'
                },
                {
                  id: 2,
                  name: '虎踞龙盘今胜昔'
                },
                {
                  id: 3,
                  name: '天翻地覆慨而慷'
                },
                {
                  id: 4,
                  name: '宜将剩勇追穷寇'
                },
                {
                  id: 5,
                  name: '不可沽名学霸王'
                },
                {
                  id: 6,
                  name: '天若有情天亦老'
                },
                {
                  id: 7,
                  name: '人间正道是沧桑'
                },
              ],
              right: [
                {
                  id: 11,
                  name: '生易老天难老'
                },
                {
                  id: 12,
                  name: '岁岁重阳'
                },
                {
                  id: 13,
                  name: '今又重阳'
                },
                {
                  id: 14,
                  name: '战地黄花分外香'
                },
                {
                  id: 15,
                  name: '一年一度秋风劲'
                },
                {
                  id: 16,
                  name: '不似春光'
                },
                {
                  id: 17,
                  name: '胜似春光'
                },
                {
                  id: 18,
                  name: '寥廓江天万里霜'
                },
              ]
            }
          }
        };
      }

      return {
        code: 1000,
        message: "用户token存在问题！",
        data: null,
      };

     
    }
  }
] as MockMethod[]