import React from 'react';
import modalimg from "../assets/modal2.jpg"
import "./modal.css"
const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal absolute w-96 h-96 mx-auto bg-white p-4 rounded-md shadow-lg">
        <span className="close font-bold xl:text-4xl" onClick={onClose}>&times;</span>
        <img src={modalimg} alt="Modal Image" className="w-full h-80  xl:mt-10 rounded-md" />
      </div>
    </div>
  );
};

export default Modal;
