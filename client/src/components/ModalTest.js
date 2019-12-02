import React from 'react';
import Modal from "./Modal";
import useModal from './useModal';
import './Modal.css'

const ModalTest = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default ModalTest;