import { MockMethod } from "vite-plugin-mock";

const userToken = "EP_ADMIN_TOKEN";

export default [
  {
    url: "/api/getRoles",
    method: "get",
    response: ({ headers }) => {
      const { authorisation } = headers;

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: "获取用户角色成功!",
          data: {
            roles: ["admin"],
          },
          token: authorisation,
        };
      }

      return {
        code: 1000,
        message: "用户登录失效，请重新登录!",
        data: null,
      };
    },
  },
] as MockMethod[];
