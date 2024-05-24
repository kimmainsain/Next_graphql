import { ButtonType } from "@/types/button/buttonType";

const ButtonField = ({ onClick, enabled, text }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg font-semibold ${
        enabled
          ? "bg-blue-600 text-white cursor-pointer"
          : "bg-gray-100 text-gray-300 cursor-not-allowed"
      }`}
      disabled={!enabled}
    >
      {text}
    </button>
  );
};

export default ButtonField;
