import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
