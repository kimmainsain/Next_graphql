"use client";
import PhotoCard from "@/components/solplace/Log/PhotoCard";
import { useState } from "react";
import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";
const CreatePage = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = () => {
    console.log("Add Photo");
  };

  const handleRemovePhoto = (index: number) => {
    console.log("Remove Photo", index);
  };

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

export default CreatePage;
