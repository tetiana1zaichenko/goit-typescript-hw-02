import React from "react";

const ImageCard = ({ item }) => {
  return (
    <div>
      <img
        src={item.urls?.small}
        alt={item.alt_description || "Фото"}
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};

export default ImageCard;
