import { InputType } from "@/types/input/inputType";

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputType) => (
  <div className="flex flex-col mx-4 my-3">
    <div className="mb-2 font-semibold text-gray-500">{label}</div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 mb-4 border border-gray-400 rounded-md text-sm"
    />
  </div>
);

export default InputField;
