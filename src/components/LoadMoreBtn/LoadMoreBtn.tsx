import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button className={s.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

// import React from "react";
// import s from "./LoadMoreBtn.module.css";

// const LoadMoreBtn = ({ onClick }) => {
//   return (
//     <div>
//       <button className={s.button} onClick={onClick}>
//         Loade more
//       </button>
//     </div>
//   );
// };

// export default LoadMoreBtn;
