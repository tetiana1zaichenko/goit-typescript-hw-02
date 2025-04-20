import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
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
