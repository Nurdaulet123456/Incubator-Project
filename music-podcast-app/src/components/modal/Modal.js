// TODO: import css files
import "./Modal.css";
import ReactDom from "react-dom";
import CloseImg from "../../images/icons/Close.svg";
import { motion } from "framer-motion";

import { createPortal } from 'react-dom'

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <motion.div 
      className="modal"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button 
            className="close__btn" 
            onClick={onClose}
            whileHover={{transform: 'rotate(90deg)'}}>
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
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <div className="modal__inner">
          <div className="modal__content">
            <motion.button 
            className="close__btn" 
            onClick={onClose}
            whileHover={{transform: 'rotate(90deg)'}}>
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

const Translate = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return 
};

const ProfileAndResult = ({isOpen, children}) => {

  if (!isOpen) return null;
  return (
    <>
      <div className="profile">
        {/* <div className="profile__page">
          adad
        </div>

        <div className="results">
          adss
        </div> */}

        {children}
      </div>
    </>
  );
}

const SuccessProtal = ({isOpen, children}) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      {children}
    </>,

    document.getElementById('portal')
  );
}

const ErrorProtal = ({isOpen, children}) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      {children}
    </>,

    document.getElementById('portal')
  );
}

export { Modal, LoginModal, Translate, ProfileAndResult, SuccessProtal, ErrorProtal };
