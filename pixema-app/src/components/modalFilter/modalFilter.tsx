import { useState } from "react";
import Modal from "react-modal";
import Button, { ButtonTypes } from "../button/button";
import { CloseIcon } from "../assets/icons/close/close";
import styles from "./header.module.scss";

const ModalFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.modal}>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div className={styles.modalHead}>
          <h3>Filter</h3>
          <Button
            type={ButtonTypes.Secondary}
            title={<CloseIcon />}
            onClick={handleCloseModal}
            className={styles.closeBtn}
          />
        </div>
        <div className={styles.filter}>
            
        </div>
      </Modal>
    </div>
  );
};

export default ModalFilter;
