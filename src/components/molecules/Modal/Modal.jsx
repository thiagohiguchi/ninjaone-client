import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

//{ type = "primary",
// size = "default",
// label,
// onClick,
// className,
// children, }
export const Modal = ({ id, children }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
        {children}
      </div>
    </dialog>
  );
};

// Add PropTypes validation
Modal.propTypes = {
  id: PropTypes.string.isRequired,
  //   type: PropTypes.oneOf(["primary", "icon"]).isRequired,
  //   size: PropTypes.oneOf(["default", "small"]),
  //   label: PropTypes.string.isRequired,
  //   className: PropTypes.string,
  //   onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default Modal;
