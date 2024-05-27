"use client";
import { useState } from "react";
import { MAX_SOLPLACE_LOG_PICTURES } from "@/constants/solplaceLog";

const PictureCard = () => {
  const [pictures, setPictures] = useState<string[]>([
    "dummy",
    "dummy2",
    "dummy3",
    "dummy4",
  ]);

  const handleAddPicture = () => {
    console.log("Add Picture");
  };

  const handleRemovePicture = (index: number) => {
    console.log("Remove Picture", index);
  };

  return (
    <div className="flex overflow-x-auto space-x-2">
      <div
        className="w-24 h-24 border-2 rounded-md flex flex-col justify-center items-center cursor-pointer flex-shrink-0"
        onClick={handleAddPicture}
      >
        <div className="text-4xl">+</div>
        <div className="text-center">사진 등록</div>
      </div>
      {pictures.map((picture, index) => (
        <div
          key={index}
          className="relative w-24 h-24 flex-shrink-0 bg-red-500 rounded-md"
        >
          <img src={picture} alt={`Picture ${index + 1}`} />
          {index === 0 && (
            <div className="absolute top-1 left-1 bg-white text-black text-xs px-1 rounded">
              대표
            </div>
          )}
          <button
            className="absolute top-1 right-1 bg-white rounded-full cursor-pointer"
            onClick={() => handleRemovePicture(index)}
          >
            <div className="text-xs">X</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PictureCard;
