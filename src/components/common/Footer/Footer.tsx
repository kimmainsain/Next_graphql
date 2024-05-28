"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import unselectedHome from "@/assets/png/Footer/Home.unselected.png";
import selectedHome from "@/assets/png/Footer/Home.selected.png";
import unselectedSol from "@/assets/png/Footer/Solplace.unselected.png";

type FooterMapType = {
  [key: string]: React.ComponentType;
};

const Footer = () => {
  const pathname = usePathname();
  const footerMap: FooterMapType = {
    "/users/main": MainFooter,
    "/": MainFooter,
    "/users/login": MainFooter,
    "/solplaces/list": MainFooter,
  };

  const DefaultFooter = EmptyFooter;
  const SelectedFooter = footerMap[pathname] || DefaultFooter;
  return <SelectedFooter />;
};

const MainFooter = () => {
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
        <Link href="/solplaces/list">
          <div className="flex flex-col items-center">
            <Image src={unselectedSol} alt="unselectedSearch" />
            <div className="text-xs">솔플레이스</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const SubFooter = () => {
  return (
    <div>
      임시 푸터
      <div>테스트중</div>
    </div>
  );
};

const EmptyFooter = () => {
  return <></>;
};

export default Footer;
