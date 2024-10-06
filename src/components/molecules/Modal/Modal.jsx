import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Modal = ({ modalId, isVisible = true, onClose, children }) => {
  return (
    <dialog
      id={modalId}
      onClose={() => onClose()}
      className={cx(isVisible && "modal")}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export const closeModal = (id) => document.getElementById(id).close();

// Add PropTypes validation
Modal.propTypes = {
  modalId: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default Modal;
