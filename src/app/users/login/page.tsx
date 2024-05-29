"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";
import { LoginInputType } from "@/types/login/loginInputType";
import InputLoginField from "@/components/common/Input/InputLoginField";
import ButtonField from "@/components/common/Button/ButtonField";
import ModalField from "@/components/common/Modal/ModalField";
import { ERROR_MESSAGE, BUTTON_MESSAGE } from "@/constants/modalText";

const LoginPage = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { handleLogin, isVisible, setIsVisible } = useLogin();
  const { handleSubmit, register, watch } = useForm<LoginInputType>();
  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    if (email && password) setIsButtonEnabled(true);
    else setIsButtonEnabled(false);
  }, [email, password]);

  return (
    <form className="flex flex-col py-2 mt-20">
      <ModalField
        message={ERROR_MESSAGE.INVALID_LOGIN_ERROR}
        buttonMessage={BUTTON_MESSAGE.RECONFIRM}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />

      <div className="mx-4 my-3">
        <InputLoginField
          label="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요"
          register={register("email")}
        />
      </div>
      <div className="mx-4 my-3">
        <InputLoginField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          register={register("password")}
        />
      </div>
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
