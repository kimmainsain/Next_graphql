"use client";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "@/recoils/authState";
import { useRouter } from "next/navigation";
import { useAuthCheck } from "@/hooks/useAuthCheck";

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  useAuthCheck();
  const isLogin = useRecoilValue(authState);
  const router = useRouter();

  const getUserName = () => {
    const name = localStorage.getItem("name");
    if (name) setUserName(name);
  };

  useEffect(() => {
    if (!isLogin) router.push("/users/login");
    else {
      getUserName();
      setIsVisible(true);
    }
  }, [isLogin, router]);

  return (
    <div className="flex justify-center items-center h-full font-bold text-xl">
      {isVisible && `${userName}님 환영합니다.`}
    </div>
  );
};

export default Home;
