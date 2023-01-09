// 暂时使用js
import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { useLoginStore } from "@/store";
import { getToken } from "utils/storage";

const http = axios.create({
  baseURL: "/api",
  timeout: 5 * 1000,
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    const loginStore = useLoginStore();

    if (loginStore.token) {
      // 如果用户token存在，则每次发送ajax请求携带
      // 字段为 Authorisation
      if (config.headers) {
        config.headers["Authorisation"] = getToken() as string;
      }
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截
http.interceptors.response.use(
  (response) => {
    const loginStore = useLoginStore();
    const res = response.data;

    // 如果状态码不等于0，则为错误情况
    if (res.code !== 0) {
      ElMessage({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      // 1000: token不合法; 1001: ...; 1002: token 过期;
      if (res.code === 1000 || res.code === 1001 || res.code === 1002) {
        // to re-login
        ElMessageBox.confirm(
          "登录失效，您可以继续留在当前页面，或者重新登录使用！",
          "Warning",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "留在当页",
            type: "warning",
          }
        ).then(() => {
          // 应当跳转至 登录页面
          // router.push("/login");
          loginStore.logout();
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default http;
