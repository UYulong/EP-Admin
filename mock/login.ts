import { MockMethod } from "vite-plugin-mock";

const users = ["admin", "operator"];
const userToken = "EP_ADMIN";

export default [
  {
    url: "/api/login",
    method: "get",
    response: ({ query }) => {
      const { userName } = query;

      if (users.includes(userName)) {
        return {
          code: 0,
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
] as MockMethod[];
