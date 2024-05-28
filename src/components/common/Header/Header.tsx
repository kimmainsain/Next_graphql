"use client";
import Link from "next/link";
import notification from "@/assets/png/Header/notification_24.png";
import wordmark from "@/assets/png/Header/wordmark_e.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderMapType = {
  [key: string]: React.ComponentType;
};

const Header = () => {
  const pathname = usePathname();
  const headerMap: HeaderMapType = {
    "/users/main": MainHeader,
    "/": MainHeader,
    "/users/login": MainHeader,
    "/solplaces/create": SubHeader,
  };

  const DefaultHeader = EmptyHeader;
  const SelectedHeader = headerMap[pathname] || DefaultHeader;
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

const SubHeader = () => {
  return <div>임시 헤더 테스트중</div>;
};

const EmptyHeader = () => {
  return <></>;
};

export default Header;
