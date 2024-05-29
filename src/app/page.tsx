"use client";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "@/recoils/authState";
import { useRouter } from "next/navigation";
import { useAuthCheck } from "@/hooks/useAuthCheck";

const Home = () => {
  useAuthCheck();
  const isLogin = useRecoilValue(authState);
  const router = useRouter();

  useEffect(() => {
    console.log("isLogin", isLogin);
    if (!isLogin) router.push("/users/login");
    else router.push("/users/main");
  }, [isLogin, router]);

  return <div>로딩 화면 ㅇㅅㅇ</div>;
};

export default Home;
