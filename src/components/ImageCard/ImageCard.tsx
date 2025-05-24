import React from "react";
import s from "./ImageCard.module.css";

interface ImageItem {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

interface ImageCardProps {
  item: ImageItem;
  openModal: (url: string, description: string | null) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.img}
        src={item.urls?.small}
        alt={item.alt_description || "Фото"}
        onClick={() => openModal(item.urls?.regular, item.alt_description)}
      />
    </div>
  );
};

export default ImageCard;
