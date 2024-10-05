import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Button = ({ type, size, label, onClick, className, children }) => {
  return (
    <button
      className={cx(
        "hover:cursor-pointer btn",
        type === "primary" && "btn-primary",
        type === "icon" && "btn-ghost",
        size === "small" && "btn-sm",
        className
      )}
      aria-label={label}
      onClick={onClick}
    >
      {children ? children : label}
    </button>
  );
};

// Add PropTypes validation
Button.propTypes = {
  type: PropTypes.oneOf(["primary", "icon"]).isRequired,
  size: PropTypes.oneOf(["small", "small"]),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

// Set default props if needed
Button.defaultProps = {
  type: "primary",
  size: "default",
};

export default Button;
