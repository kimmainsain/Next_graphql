"use client";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [userName, setUserName] = useState<string>("");

  const getName = () => {
    const name = localStorage.getItem("name");
    if (name) setUserName(name);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="flex flex-gorw justify-center items-center font-bold text-xl">
      {userName}님 환영합니다.
    </div>
  );
};

export default MainPage;
