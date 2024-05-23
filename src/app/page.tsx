"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "@/recoils/authState";
import { useRouter } from "next/navigation";

const Home = () => {
  const setAuthState = useSetRecoilState(authState);
  const isLogin = useRecoilValue(authState);
  const router = useRouter();

  const updateAuthState = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  };

  useEffect(() => {
    updateAuthState();
  }, []);

  useEffect(() => {
    if (!isLogin) {
      router.push("/users/login");
    }
  }, [isLogin, router]);

  return (
    <div>
      <Link href="/solplaces/create">linkTest</Link>
    </div>
  );
};

export default Home;
