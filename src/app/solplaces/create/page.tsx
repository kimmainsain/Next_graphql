"use client";
import PhotoCard from "@/components/solplace/Log/PhotoCard";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { VisitedLogInputType } from "@/types/input/inputType";
import { useSetRecoilState } from "recoil";
import { headerTextState } from "@/recoils/headerState";
import { useRouter } from "next/navigation";
import { usePhoto } from "@/hooks/usePhoto";
import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";
import { useSolplaceLogCreate } from "@/hooks/useSolplaceLogCreate";

import InputField from "@/components/common/Input/InputLoginField";
import InputTextAreaField from "@/components/common/Input/InputTextAreaField";
import ButtonField from "@/components/common/Button/ButtonField";
import ModalField from "@/components/common/Modal/ModalField";

const CreatePage = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const setHeaderText = useSetRecoilState(headerTextState);
  const router = useRouter();
  const { handleSubmit, register, watch } = useForm<VisitedLogInputType>({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const { photos, handleAddPhoto, handleRemovePhoto } = usePhoto();
  const { handleCreate, modal, setModal } = useSolplaceLogCreate();
  const title = watch("title");
  const content = watch("content");

  useEffect(() => {
    if (title && content && photos.length > 0) setIsButtonEnabled(true);
    else setIsButtonEnabled(false);
  }, [title, content, photos]);

  useEffect(() => {
    setHeaderText("솔플레이스 로그 등록");
  }, []);

  return (
    <>
      <ModalField
        message={modal.message}
        buttonMessage={modal.buttonMessage}
        isVisible={modal.isVisible}
        onClose={() => {
          setModal({ ...modal, isVisible: false });
          router.back();
        }}
      />

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
          <div className="mx-4 my-3">
            <InputField
              label="다녀온 솔플레이스"
              type="text"
              placeholder="솔플레이스를 선택해 주세요"
              register={register("title")}
            />
          </div>
          <div className="mx-4 my-3">
            <InputTextAreaField
              label="솔플 노트"
              placeholder="취향에 맞는 장소였나요? 공간의 분위기, 꿀팁 등 혼자 방문하기 좋은 이유를 기록해 보세요."
              register={register("content")}
            />
            <div className="text-xs text-gray-500">
              * 부적절하거나 불쾌감을 줄 수 있는 내용이 포함될 경우 로그가 숨김
              처리될 수 있습니다.
            </div>
          </div>
          <div className="flex justify-center fixed bottom-12 w-full px-4">
            <ButtonField
              onClick={handleSubmit(() => handleCreate(title, content, photos))}
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
