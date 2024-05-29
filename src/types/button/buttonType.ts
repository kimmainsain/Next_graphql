export type ButtonType = {
  onClick?: () => void;
  enabled: boolean;
  text: string;
  type: "button" | "submit" | "reset";
};
