import { useRouter } from 'vue-router'
import { useUserStore } from "@/store";
import { userLoginForm } from "./model/userForm.modle";

// 登录逻辑
export const useLogin = () => {
  const loginStore = useUserStore(); // store
  const router = useRouter()

  const userLoginForm: userLoginForm = reactive({
    userName: "admin",
    userPassword: "123456",
    verificationCode: "1234",
  });

  async function handelSubmitEvent() {
    // 表单校验...

    const { code } = await loginStore.login(userLoginForm);
    if (code === 200) {
      router.push("/");
    }
  }

  return { userLoginForm, handelSubmitEvent };
};
