import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Button = ({
  type = "default",
  size = "default",
  label,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      className={cx(
        "hover:cursor-pointer btn text-sm font-normal",
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
  type: PropTypes.oneOf(["default", "primary", "icon"]),
  size: PropTypes.oneOf(["default", "small"]),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default Button;
