import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Dropdown = ({ position, name, items, className, children }) => {
  return (
    <div
      className={cx(
        "dropdown",
        "font-normal text-[14px] leading-4",
        position === "bottom" && "dropdown-bottom",
        position === "bottom-end" && "dropdown-bottom dropdown-end"
      )}
    >
      <div
        tabIndex={0}
        role="button"
        className={cx(
          "font-normal text-[14px] leading-4",
          children && className,
          !children && "btn m-1"
        )}
        aria-label={name}
      >
        {children ? children : name}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-[4px] z-[1] w-52 shadow"
      >
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Add PropTypes validation
Dropdown.propTypes = {
  position: PropTypes.oneOf(["bottom", "bottom-end"]).isRequired,
  name: PropTypes.string.isRequired, // Name is required and should be a string
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

// Set default props if needed
Dropdown.defaultProps = {
  position: "bottom", // Default Dropdown type is text
};

export default Dropdown;
