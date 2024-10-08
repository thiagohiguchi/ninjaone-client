import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Dropdown = ({
  position = "bottom",
  name,
  items,
  className,
  closeOnClickItem = true,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const outerElement = useRef(null);
  const buttonRef = useRef(null);

  const onClickHandle = () => {
    if (isOpen) {
      setIsOpen(false);
      document.activeElement.blur();
    } else {
      setIsOpen(true);
    }
  };

  const onFocusOutHandle = () => {
    setIsOpen(false);
  };

  const onFocusInHandle = () => {};

  const onClickItemHandle = () => {
    if (closeOnClickItem) {
      document.activeElement.blur();
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onFocusOutItemHandle = () => {
    setIsOpen(false);
  };

  return (
    <div ref={outerElement}>
      <div
        className={cx(
          "dropdown",
          "font-normal text-sm leading-sm",
          "w-full",
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
          onClick={onClickHandle}
          onBlur={onFocusOutHandle}
          onFocus={onFocusInHandle}
          ref={buttonRef}
        >
          {children ? children : name}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 z-[1] w-52 shadow"
          onClick={onClickItemHandle}
          onBlur={onFocusOutItemHandle}
        >
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Add PropTypes validation
Dropdown.propTypes = {
  position: PropTypes.oneOf(["top-end", "bottom", "bottom-end"]).isRequired,
  name: PropTypes.string.isRequired, // Name is required and should be a string
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeOnClickItem: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default Dropdown;
