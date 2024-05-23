"use client";
import Image from "next/image";
import Link from "next/link";

import unselectedHome from "@/assets/png/Footer/Home.unselected.png";
import selectedHome from "@/assets/png/Footer/Home.selected.png";
import unselectedSol from "@/assets/png/Footer/Solplace.unselected.png";

const Footer = () => {
  return (
    <div className="flex justify-around items-center p-4 h-12 bg-white shadow-md fixed bottom-0 w-full">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="flex flex-col items-center">
            <Image src={unselectedHome} alt="unselectedHome" />
            <div className="text-xs">홈</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/solplace">
          <div className="flex flex-col items-center">
            <Image src={unselectedSol} alt="unselectedSearch" />
            <div className="text-xs">솔플레이스</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
