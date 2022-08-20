import { defineStore } from "pinia"; // 登录相关 store
import { getUserRoles, login } from "../../apis/mock/login"; // 登录api
import { asyncRoutes } from "../../router"; // 导入 静态路由 和 动态路由
import { clearToken, getToken, setToken } from "../../utils/storage"; // 设置token方法
import {
  loginStateModel,
  userInfoModel,
  userLoginFormModel,
  userRoles,
} from "../models/login.model";

const useLoginStore = defineStore({
  id: "login",

  state: (): loginStateModel => {
    return {
      token: getToken(),
      roles: [],
    };
  },

  getters: {
    rolesList(state) {
      return state.roles;
    },
  },

  actions: {
    // 登录方法
    login(loginForm: userLoginFormModel) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await login(loginForm);
          this.setToken(res.token);
          resolve(res);
        } catch (error) {
          reject(error);
        }
      });
    },

    // 设置 token
    setToken(token: string) {
      this.token = token; // store 中存一份
      setToken(token); // 浏览器 中存一份
    },

    // 获取用户角色
    getRolesInfo(): Promise<userInfoModel> {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await getUserRoles({ token: this.token });
          this.roles = data.data.roles;
          resolve(data.data.roles);
        } catch (error) {
          reject(error);
        }
      });
    },

    // 登出方法
    logout() {
      console.log("logout");
      clearToken(); // 清除浏览器中的token
      this.roles = []; // 清空store中的数据
    },

    /**
     * Use meta.role to determine if the current user has permission
     * @param roles
     * @param route
     */
    hasPermission(roles: any, route: any) {
      if (route.meta && route.meta.roles) {
        return roles.some((role: any) => route.meta.roles.includes(role));
      } else {
        return true;
      }
    },

    /**
     * 路由过滤
     * @param routes asyncRoutes
     * @param roles
     */
    filterRoutes(routes: any, roles: any) {
      const res: any = [];

      routes.forEach((route: any) => {
        const tmp = { ...route };
        if (this.hasPermission(roles, tmp)) {
          if (tmp.children) {
            tmp.children = this.filterRoutes(tmp.children, roles);
          }
          res.push(tmp);
        }
      });

      return res;
    },

    // 生成路由方法
    generateRoutes(roles: userRoles) {
      return new Promise((resolve) => {
        let accessedRoutes;

        if (roles.includes("admin")) {
          accessedRoutes = asyncRoutes || [];
        } else {
          accessedRoutes = this.filterRoutes(asyncRoutes, roles);
        }

        resolve(accessedRoutes);
      });
    },
  },
});

export default useLoginStore;
