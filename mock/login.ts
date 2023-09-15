import { MockMethod } from "vite-plugin-mock";

const users = ["admin", "operator"];
const userToken = "EP_ADMIN_TOKEN";

export default [
  {
    url: "/api/login",
    method: "get",
    response: ({ query }) => {
      const { userName } = query;

      if (users.includes(userName)) {
        return {
          code: 200,
          message: "登录成功!",
          data: null,
          token: userToken,
        };
      }
      return {
        code: 1000,
        message: "用户不存在",
        data: null,
      };
    },
  },

  {
    url: "/api/logout",
    method: "get",
    response: ({ headers }) => {
      if (headers.authorisation !== '') {
        return {
          code: 200,
          message: "退出成功",
          data: null,
        };
      }

      return {
        code: 1000,
        message: "退出登录失败",
        data: null,
      };
    },
  },
] as MockMethod[];
