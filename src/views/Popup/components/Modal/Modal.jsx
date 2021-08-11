import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({
  visible = false,
  style,
  title = 'Unlock more features',
  footer,
  wrapClassName = '',
  okText = 'OK',
  cancelText = 'Cancel',
  closable = true,
  onOk = () => {},
  onCancel = () => {},
  mask = true,
  maskClosable = true,
  children = 'Basic body',
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onCancel();
    }
  };
  return visible
    ? ReactDOM.createPortal(
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal}>
            {closable && (
              <span
                className={styles.close}
                onClick={onCancel}
              ></span>
            )}
            <div className={styles.header}>{title}</div>
            <div className={styles.body}>{children}</div>
            <div className={styles.footer}>
              <button onClick={onCancel} className={styles.btn}>
                {cancelText}
              </button>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={onOk}
              >
                {okText}
              </button>
            </div>
          </div>
        </div>,
        document.querySelector('body'),
      )
    : null;
};

export default Modal;
