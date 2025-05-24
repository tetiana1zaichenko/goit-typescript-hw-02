import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgb(0, 0, 0, 0.6)",
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={src} alt={alt ?? "Фото"} />
    </Modal>
  );
};

export default ImageModal;

// import Modal from "react-modal";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
//   overlay: {
//     background: "rgb(0, 0, 0, 0.6)",
//   },
// };
// Modal.setAppElement("#root");
// export const ImageModal = ({ modalIsOpen, closeModal, src, alt }) => {
//   return (
//     <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//       style={customStyles}
//       contentLabel="Example Modal"
//     >
//       <img src={src} alt={alt} />
//     </Modal>
//   );
// };

// export default ImageModal;
