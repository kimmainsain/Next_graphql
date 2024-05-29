import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import { authState } from "@/recoils/authState";
import { useSetRecoilState } from "recoil";
import { LoginInputType } from "@/types/login/loginInputType";
import { setCookie } from "@/utils/cookies";

export const useLogin = () => {
  const [login] = useMutation(LOGIN_MUTATION);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const setAuthState = useSetRecoilState(authState);

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
      setIsVisible(true);
      console.log(error);
    }
  };

  return {
    handleLogin,
    isVisible,
    setIsVisible,
  };
};
