"use client";
import PhotoCard from "@/components/solplace/Log/PhotoCard";
import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import InputField from "@/components/common/Input/InputLoginField";
import InputTextAreaField from "@/components/common/Input/InputTextAreaField";
import ButtonField from "@/components/common/Button/ButtonMediumField";
import { VisitedLogInputType } from "@/types/input/inputType";


const CreatePage = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);

  const { handleSubmit, register, watch } = useForm<VisitedLogInputType>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const title = watch("title");
  const content = watch("content");
  useEffect(() => {
    if (title && content) setIsButtonEnabled(true);
    else setIsButtonEnabled(false);
  }, [title, content]);

  const handleAddPhoto = () => {
    console.log("Add Photo");
  };

  const handleRemovePhoto = (index: number) => {
    console.log("Remove Photo", index);
  };

  const handleCreate = () => {
    console.log("솔플레이스 로그 등록");
  };

  return (
    <>
      <div className="w-full p-4">
        <div className="flex items-center mb-2">
          <div className="text-sm font-semibold text-gray-500">
            솔플레이스 사진
          </div>
          <div className="ml-2 text-sm text-gray-500">
            {photos.length}/{MAX_SOLPLACE_LOG_PICTURES}
          </div>
        </div>
        <PhotoCard
          photos={photos}
          onAddPhoto={handleAddPhoto}
          onRemovePhoto={handleRemovePhoto}
        />
      </div>
      <div>
        <form className="flex flex-col py-2">
          <InputField
            label="다녀온 솔플레이스"
            type="text"
            placeholder="솔플레이스를 선택해 주세요"
            register={register("title")}
          />
          <InputTextAreaField
            label="솔플 노트"
            placeholder="취향에 맞는 장소였나요? 공간의 분위기, 꿀팁 등 혼자 방문하기 좋은 이유를 기록해 보세요."
            register={register("content")}
          />
          <div className="flex m-4 gap-2">
            <ButtonField
              onClick={handleSubmit(handleCreate)}
              enabled={isButtonEnabled}
              text="솔플레이스 로그 등록"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePage;
