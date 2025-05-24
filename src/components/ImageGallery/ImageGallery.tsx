import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

interface ImageGalleryProps {
  data: ImageItem[];
  openModal: (url: string, description: string | null) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data, openModal }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {data.map((item) => (
          <li className={s.li} key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
