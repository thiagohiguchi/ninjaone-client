import { React } from "react";
import PropTypes from "prop-types";

// import logo from "../../assets/logos/NinjaOneLogo.svg";

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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg> */}
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
