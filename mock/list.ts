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
] as MockMethod[]