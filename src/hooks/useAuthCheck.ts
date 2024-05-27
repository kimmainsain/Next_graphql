import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "@/recoils/authState";
import { checkAuth } from "@/utils/checkAuth";

export const useAuthCheck = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const updateAuthState = async () => {
      const isLogin = await checkAuth();
      setAuthState(isLogin);
    };

    updateAuthState();
  }, [setAuthState]);
};
