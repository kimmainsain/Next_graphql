"use client";

import { useParams } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_SOLPLACE_LOG_BY_ID } from "@/graphql/querys";
import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { VisitedLogInputType } from "@/types/input/inputType";
import { DELETE_SOLPLACE_LOG_BY_ID } from "@/graphql/mutations";
import { useRouter } from "next/navigation";

import InputField from "@/components/common/Input/InputLoginField";
import ModalField from "@/components/common/Modal/ModalField";
import ButtonMediumField from "@/components/common/Button/ButtonMediumField";
import InputTextAreaField from "@/components/common/Input/InputTextAreaField";
import PhotoCard from "@/components/solplace/Log/PhotoCard";
import { useSetRecoilState } from "recoil";
import { headerTextState } from "@/recoils/headerState";

const SolplaceUpdatePage = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const params = useParams();
  const { data, loading, error } = useQuery(FETCH_SOLPLACE_LOG_BY_ID, {
    variables: { id: params.id },
  });
  const router = useRouter();
  const [deleteSolplaceLogById] = useMutation(DELETE_SOLPLACE_LOG_BY_ID);
  const setHeaderText = useSetRecoilState(headerTextState);

  const { handleSubmit, register, watch, reset } = useForm<VisitedLogInputType>(
    {
      defaultValues: {
        title: "",
        content: "",
      },
    }
  );

  const title = watch("title");
  const content = watch("content");

  useEffect(() => {
    if (data) {
      setHeaderText(`${data.fetchSolplaceLogById.solplaceName} 수정`);
      reset({
        title: data.fetchSolplaceLogById.solplaceName,
        content: data.fetchSolplaceLogById.introduction,
      });
    }
  }, [data]);

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

  const handleUpdate = () => {
    console.log("Login");
  };

  const handleDelete = async () => {
    try {
      const result = await deleteSolplaceLogById({
        variables: {
          id: params.id,
        },
      });
      console.log("result", result);
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;
  const photos = JSON.parse(data?.fetchSolplaceLogById.images);

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
          </div>
          <div className="flex gap-2 fixed bottom-12 w-full px-4">
            <ButtonMediumField
              onClick={handleSubmit(handleDelete)}
              enabled={false}
              text="로그 삭제"
              type="submit"
            />
            <ButtonMediumField
              onClick={handleSubmit(handleUpdate)}
              enabled={isButtonEnabled}
              text="로그 수정"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SolplaceUpdatePage;
