"use client";
import Link from "next/link";
import notification from "@/assets/png/Header/notification_24.png";
import wordmark from "@/assets/png/Header/wordmark_e.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 h-12">
      <Link href="/" className="">
        <Image src={wordmark} alt="wordmark" />
      </Link>
      <Link href="/" className="">
        <Image src={notification} alt="notification" />
      </Link>
    </div>
  );
};

export default Header;
