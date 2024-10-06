import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Dropdown = ({
  position = "bottom",
  name,
  items,
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        "dropdown",
        "font-normal text-sm leading-sm",
        position === "top-end" && "dropdown-top dropdown-end",
        position === "bottom" && "dropdown-bottom",
        position === "bottom-end" && "dropdown-bottom dropdown-end"
      )}
    >
      <div
        tabIndex={0}
        role="button"
        className={cx(
          "font-normal text-sm leading-sm",
          children && className,
          !children && "btn m-1"
        )}
        aria-label={name}
      >
        {children ? children : name}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 z-[1] w-52 shadow"
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
  position: PropTypes.oneOf(["top-end", "bottom", "bottom-end"]).isRequired,
  name: PropTypes.string.isRequired, // Name is required and should be a string
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default Dropdown;
