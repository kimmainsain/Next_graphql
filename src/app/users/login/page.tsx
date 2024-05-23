"use client";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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

  const handleLogin = async () => {
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
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
