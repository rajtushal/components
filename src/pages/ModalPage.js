import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handlClick = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  const modal = (
    <Modal
      onClose={onClose}
      actionBar={
        <Button primary onClick={onClose}>
          I Accept
        </Button>
      }
    >
      <p>you can add some text here</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button onClick={handlClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
