import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";
import { useState } from "react";

export const usePhoto = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = () => {
    if (photos.length >= MAX_SOLPLACE_LOG_PICTURES) return;
    const test = "https://picsum.photos/300/300"; // 이후에 로직 변경 필요
    setPhotos([...photos, test]);
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = photos.filter((_, idx) => idx !== index);
    setPhotos(newPhotos);
  };

  return { photos, setPhotos, handleAddPhoto, handleRemovePhoto };
};
