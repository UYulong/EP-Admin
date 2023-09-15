import requset from "utils/request";
import { CheckTokenModel, LoginForm } from "../types/login";

enum Api {
  LOGIN_URL = "/login",
  LOGOUT = "/logout",
  GET_USER_ROLE = "/getRoles",
}

const login = (params: LoginForm) => {
  return requset({
    url: Api.LOGIN_URL,
    method: "get",
    params,
  });
};

const getUserRoles = (params: CheckTokenModel) => {
  return requset({
    url: Api.GET_USER_ROLE,
    method: "get",
    params,
  });
};

const logout = () => {
  return requset({
    url: Api.LOGOUT,
    method: "get",
  });
};

export { login, getUserRoles, logout };
