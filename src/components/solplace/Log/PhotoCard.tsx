import { PhotoCardType } from "@/types/card/PhotoCardType";
import Image from "next/image";

const PhotoCard = ({ photos, onAddPhoto, onRemovePhoto }: PhotoCardType) => {
  return (
    <div className="flex overflow-x-auto space-x-2">
      <div
        className="w-24 h-24 border-2 rounded-md flex flex-col justify-center items-center cursor-pointer flex-shrink-0"
        onClick={onAddPhoto}
      >
        <div className="text-4xl">+</div>
        <div className="text-center text-sm">사진 등록</div>
      </div>
      {photos?.map((photo: string, index: number) => (
        <div
          key={index}
          className="relative w-24 h-24 flex-shrink-0 bg-gray-200 rounded-lg"
        >
          <Image
            src={photo}
            alt={`Photo ${index + 1}`}
            fill
            className="rounded-lg"
          />
          {index === 0 && (
            <div className="absolute top-1 left-1 bg-white text-black text-xs px-1 rounded">
              대표
            </div>
          )}
          <button
            className="absolute top-1 right-1 bg-white rounded-full cursor-pointer"
            onClick={() => onRemovePhoto(index)}
          >
            <div className="text-xs">X</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotoCard;
