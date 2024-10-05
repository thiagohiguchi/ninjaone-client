import { React } from "react";
import PropTypes from "prop-types";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
          fill="#6E6D7A"
        />
      </svg>

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
  className: PropTypes.string, // className is optional but should be a string if provided
};

// Set default props if needed
Input.defaultProps = {
  type: "text", // Default input type is text
  placeholder: "",
  className: "",
};

export default Input;
