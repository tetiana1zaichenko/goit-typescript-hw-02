import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ data, openModal }) => {
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
