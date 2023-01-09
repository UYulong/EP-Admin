import { router } from "routes/index";
import { useLoginStore } from "@/store";
import { userLoginForm } from "./model/userForm.modle";

// 登录逻辑
export const useLogin = () => {
  const loginStore = useLoginStore(); // store

  const userLoginForm: userLoginForm = reactive({
    userName: "admin",
    userPassword: "123456",
    verificationCode: "1234",
  });

  async function handelSubmitEvent() {
    // 表单校验...

    const data = await loginStore.login(userLoginForm);
    // console.log(data);
    router.push("/");
  }

  return { userLoginForm, handelSubmitEvent };
};
