import { login } from "../../apis/mock/login";
import useLoginStore from "../../store/modules/login";
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
    // store.dispatch('login', userState.userLoginForm)
    const { data } = await login(userLoginForm);
    console.log(data);
  }

  return { userLoginForm, handelSubmitEvent };
};
