import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={s.button} onClick={onClick}>
        Loade more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
