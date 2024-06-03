import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    isVisible: false,
    message: "",
    buttonMessage: "",
  },
});
