import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ data, openModal }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
