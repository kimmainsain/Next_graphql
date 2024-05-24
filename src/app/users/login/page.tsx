"use client";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import InputField from "@/components/common/Input/InputField";
import ButtonField from "@/components/common/Button/ButtonField";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(LOGIN_MUTATION);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col py-2 mt-20">
      <InputField
        label="이메일"
        type="email"
        placeholder="이메일을 입력해 주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="m-4">
        <ButtonField
          onClick={handleLogin}
          enabled={isButtonEnabled}
          text="로그인"
        />
      </div>
    </div>
  );
};

export default LoginPage;
