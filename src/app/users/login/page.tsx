"use client";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import InputField from "@/components/common/Input/InputField";
import ButtonField from "@/components/common/Button/ButtonField";
import { useForm } from "react-hook-form";

type LoginInputType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useMutation(LOGIN_MUTATION);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { handleSubmit, register, watch } = useForm<LoginInputType>();
  const email = watch("email");
  const password = watch("password");

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
      console.log(data.login);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col py-2 mt-20">
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
