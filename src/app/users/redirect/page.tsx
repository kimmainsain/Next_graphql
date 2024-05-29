"use client";
import ButtonField from "@/components/common/Button/ButtonField";
import { useRouter } from "next/navigation";

const RedirectPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen mx-4">
      <ButtonField
        text="로그인 해주세요."
        enabled={true}
        onClick={() => {
          router.push("/users/login");
        }}
        type="button"
      />
    </div>
  );
};

export default RedirectPage;
