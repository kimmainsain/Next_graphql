"use client";
import ButtonField from "@/components/common/Button/ButtonField";

type ModalFieldType = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  buttonMessage: string;
};

const ModalField = ({
  message,
  isVisible,
  onClose,
  buttonMessage,
}: ModalFieldType) => {
  if (!isVisible) return null;

  return (
    <div className="z-20 fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-10 flex flex-col rounded-xl border bg-white w-full p-4 mx-4 shadow-lg">
        <div className="mb-6 mt-2 flex items-center justify-center text-center font-bold">
          {message}
        </div>
        <ButtonField
          onClick={onClose}
          enabled={true}
          text={buttonMessage}
          type="button"
        />
      </div>
    </div>
  );
};

export default ModalField;
