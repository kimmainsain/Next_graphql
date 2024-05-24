"use client";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { authState } from "@/recoils/authState";
import { useSetRecoilState } from "recoil";
import { LoginInputType } from "@/types/login/loginInputType";
import InputField from "@/components/common/Input/InputField";
import ButtonField from "@/components/common/Button/ButtonField";
import ModalField from "@/components/common/Modal/ModalField";

const LoginPage = () => {
  const [login] = useMutation(LOGIN_MUTATION);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { handleSubmit, register, watch } = useForm<LoginInputType>();
  const email = watch("email");
  const password = watch("password");
  const router = useRouter();
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    if (email && password) setIsButtonEnabled(true);
    else setIsButtonEnabled(false);
  }, [email, password]);

  const handleLogin = async () => {
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
      setAuthState(true);
      router.push("/");
    } catch (error) {
      setIsVisible(true);
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col py-2 mt-20">
      <ModalField
        message="잘못된 로그인 정보입니다."
        buttonMessage="다시 확인하기"
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />

      <InputField
        label="이메일"
        type="email"
        placeholder="이메일을 입력해 주세요"
        register={register("email")}
      />
      <InputField
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        register={register("password")}
      />
      <div className="m-4">
        <ButtonField
          onClick={handleSubmit(handleLogin)}
          enabled={isButtonEnabled}
          text="로그인"
          type="submit"
        />
      </div>
    </form>
  );
};

export default LoginPage;
