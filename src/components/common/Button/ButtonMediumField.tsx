import { ButtonType } from "@/types/button/buttonType";

const ButtonMediumField = ({ onClick, enabled, text, type }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full px-4 py-3 rounded-lg font-medium font-semibold ${
        enabled
          ? "bg-blue-600 text-white cursor-pointer"
          : "bg-gray-100 text-gray-600 cursor-not-allowed"
      }`}
    >
      {text}
    </button>
  );
};

export default ButtonMediumField;
