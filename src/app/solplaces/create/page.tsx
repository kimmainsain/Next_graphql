import PictureCard from "@/components/solplace/Log/PictureCard";

const CreatePage = () => {
  return (
    <div className="w-full p-4">
      <div className="flex items-center mb-2">
        <span className="text-lg font-semibold">솔플레이스 사진</span>
        <span className="ml-2 text-sm text-gray-500">
          {5}/{5}
        </span>
      </div>
      <PictureCard />
    </div>
  );
};

export default CreatePage;
