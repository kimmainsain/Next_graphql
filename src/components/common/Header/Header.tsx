"use client";
import Link from "next/link";
import notification from "@/assets/png/Header/notification_24.png";
import wordmark from "@/assets/png/Header/wordmark_e.png";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";
import { headerTextState } from "@/recoils/headerState";

type HeaderMapType = {
  [key: string]: React.ComponentType;
};

const Header = () => {
  const pathname = usePathname();
  const headerMap: HeaderMapType = {
    "/users/main": MainHeader,
    "/": MainHeader,
    "/users/login": MainHeader,
    "/solplaces/create": HeaderWithText,
    "/solplaces/update": HeaderWithText,
  };

  const findHeaderComponent = (path: string) => {
    if (headerMap[path]) return headerMap[path];
    if (path.startsWith("/solplaces/update/")) return HeaderWithText;
    return EmptyHeader;
  };

  const SelectedHeader = findHeaderComponent(pathname);
  return <SelectedHeader />;
};

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 h-12">
      <Link href="/" className="">
        <Image src={wordmark} alt="wordmark" />
      </Link>
      <div className="">
        <Image src={notification} alt="notification" />
      </div>
    </div>
  );
};

const HeaderWithText = () => {
  const text = useRecoilValue(headerTextState);
  return (
    <div className="flex justify-center items-center h-12">
      <div className="text-lg font-bold">{text}</div>
    </div>
  );
};

const EmptyHeader = () => {
  return <></>;
};

export default Header;
