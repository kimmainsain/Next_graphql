"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { FETCH_SOLPLACE_LOG_BY_ID } from "@/graphql/querys";
import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";

import PhotoCard from "@/components/solplace/Log/PhotoCard";

const SolplaceUpdatePage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(FETCH_SOLPLACE_LOG_BY_ID, {
    variables: { id: params.id },
  });

  const handleAddPhoto = () => {
    console.log("Add Photo");
  };

  const handleRemovePhoto = (index: number) => {
    console.log("Remove Photo", index);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  const photos = JSON.parse(data?.fetchSolplaceLogById.images);

  return (
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
  );
};

export default SolplaceUpdatePage;
