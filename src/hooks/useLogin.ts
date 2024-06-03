import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import { authState } from "@/recoils/authState";
import { useSetRecoilState } from "recoil";
import { LoginInputType } from "@/types/login/loginInputType";
import { setCookie } from "@/utils/cookies";
import { modalState } from "@/recoils/modalState";
import { ERROR_MESSAGE, BUTTON_MESSAGE } from "@/constants/modalText";

export const useLogin = () => {
  const [login] = useMutation(LOGIN_MUTATION);
  const router = useRouter();
  const setAuthState = useSetRecoilState(authState);
  const setModal = useSetRecoilState(modalState);

  const handleLogin = async ({ email, password }: LoginInputType) => {
    try {
      const { data } = await login({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
      const { accessToken, name } = data.login;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("name", name);
      await setCookie("token", accessToken);
      await setCookie("name", name);
      setAuthState(true);
      router.push("/");
    } catch (error) {
      setModal({
        isVisible: true,
        message: ERROR_MESSAGE.INVALID_LOGIN_ERROR,
        buttonMessage: BUTTON_MESSAGE.RECONFIRM,
      });
      console.log(error);
    }
  };

  return { handleLogin };
};
