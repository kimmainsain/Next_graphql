export type PhotoCardType = {
  photos: string[];
  onAddPhoto: () => void;
  onRemovePhoto: (index: number) => void;
};
