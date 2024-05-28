import { InputType } from "@/types/input/inputType";
const InputLoginField = ({ label, type, placeholder, register }: InputType) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 font-semibold text-gray-500">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full px-4 py-3 mb-4 border border-gray-400 rounded-md text-sm"
      />
    </div>
  );
};

export default InputLoginField;
