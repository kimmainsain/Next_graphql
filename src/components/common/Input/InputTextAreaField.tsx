import { InputType } from "@/types/input/inputType";

const InputTextAreaField = ({ label, placeholder, register }: InputType) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 font-semibold text-gray-500">{label}</div>
      <textarea
        placeholder={placeholder}
        {...register}
        className="w-full px-4 py-3 mb-4 border border-gray-400 rounded-md text-sm"
        rows="5"
      />
    </div>
  );
};

export default InputTextAreaField;
