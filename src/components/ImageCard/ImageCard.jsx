import React from "react";

const ImageCard = ({ item, openModal }) => {
  return (
    <div>
      <img
        src={item.urls?.small}
        alt={item.alt_description || "Фото"}
        style={{ width: "200px", height: "auto" }}
        onClick={() => openModal(item.urls?.small, item.alt_description)}
      />
    </div>
  );
};

export default ImageCard;
