// TODO: import css files
import "./Modal.css";
import ReactDom from "react-dom";
import CloseImg from "../../images/icons/Close.svg";
import { motion } from "framer-motion";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button
              className="close__btn"
              onClick={onClose}
              whileHover={{ transform: "rotate(90deg)" }}
            >
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>,

    document.getElementById("portal")
  );
};

const LoginModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button
              className="close__btn"
              onClick={onClose}
              whileHover={{ transform: "rotate(90deg)" }}
            >
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>,

    document.getElementById("portal")
  );
};

const ProfileAndResult = ({ openAuto, children, closeBtn }) => {
  if (!openAuto) return null;
  return (
    <>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button
              className="close__btn"
              onClick={closeBtn}
              whileHover={{ transform: "rotate(90deg)" }}
            >
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const SuccessPortal = ({ children, statusopen, statusclose }) => {
  if (!statusopen) return null;

  return ReactDom.createPortal(
    <>
      <motion.div
        className="modal modal__status"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal__inner modal__status-inner">
          <div className="modal__content modal__status-content">
            <motion.button
              className="close__btn"
              onClick={statusclose}
              whileHover={{ transform: "rotate(90deg)" }}
            >
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>,

    document.getElementById("portal")
  );
};

const ErrorPortal = ({ children, statusopen, statusclose }) => {
  if (!statusopen) return null;

  return ReactDom.createPortal(
    <>
      <motion.div
        className="modal modal__status"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal__inner modal__status-inner">
          <div className="modal__content modal__status-content">
            <motion.button
              className="close__btn"
              onClick={statusclose}
              whileHover={{ transform: "rotate(90deg)" }}
            >
              <img src={CloseImg} alt="" />
            </motion.button>
            {children}
          </div>
        </div>
      </motion.div>
    </>,

    document.getElementById("portal")
  );
};

export { Modal, LoginModal, ProfileAndResult, SuccessPortal, ErrorPortal };
