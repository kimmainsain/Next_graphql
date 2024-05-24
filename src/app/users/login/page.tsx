"use client";
import { gql, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      name
    }
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(LOGIN_MUTATION);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (email && password) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [email, password]);

  const handleLogin = async () => {
    console.log("Click");
    try {
      const { data } = await login({
        mutation: LOGIN_MUTATION,
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
      <div className="flex flex-col mx-4 my-3">
        <div className="mb-2 font-semibold text-gray-500">이메일</div>
        <input
          type="email"
          placeholder="이메일을 입력해 주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-400 rounded-md text-sm"
        />
      </div>
      <div className="flex flex-col mx-4 my-3">
        <div className="mb-2 font-semibold text-gray-500">비밀번호</div>
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-400 rounded-md text-sm"
        />
      </div>
      <div className="m-4">
        <button
          onClick={handleLogin}
          className={`w-full p-4 rounded-lg font-semibold ${
            isButtonEnabled
              ? "bg-blue-600 text-white cursor-pointer"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!isButtonEnabled}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
