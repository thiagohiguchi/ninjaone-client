import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  name,
  icon = null,
  error = false,
}) => {
  return (
    <label
      className={cx(
        "input input-bordered flex items-center gap-2 font-normal text-sm leading-sm",
        error && "!border-error"
      )}
    >
      {icon}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
      />
    </label>
  );
};

// Add PropTypes validation
Input.propTypes = {
  type: PropTypes.string, // Type should be a string (e.g., "text", "password")
  placeholder: PropTypes.string, // Placeholder should be a string
  value: PropTypes.oneOfType([
    // Value can be either string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Value is required
  onChange: PropTypes.func.isRequired, // onChange is required and should be a function
  name: PropTypes.string.isRequired, // Name is required and should be a string
  icon: PropTypes.element,
  className: PropTypes.string, // className is optional but should be a string if provided
  error: PropTypes.bool,
};

export default Input;
