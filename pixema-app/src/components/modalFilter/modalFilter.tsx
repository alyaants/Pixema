import { useState } from "react";
import Modal from "react-modal";
import Button, { ButtonTypes } from "../button/button";
import { CloseIcon } from "../assets/icons/close/close";
import styles from "./modalFilter.module.scss";

const ModalFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.modal}>
      <Modal isOpen={isModalOpen}>
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
