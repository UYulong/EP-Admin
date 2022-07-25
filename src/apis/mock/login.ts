import requset from "../../utils/request";
import { LoginForm } from "../types/login";

enum Api {
  LOGIN_URL = "/login",
}

const login = (params: LoginForm) => {
  return requset({
    url: Api.LOGIN_URL,
    method: "get",
    params,
  });
};

export { login };
