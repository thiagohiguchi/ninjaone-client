import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Loading = ({ isLoading, size = "default", className }) => {
  return (
    isLoading && (
      <span
        className={cx(
          "loading loading-spinner m-auto",
          size === "small" && "loading-sm",
          size === "large" && "loading-lg",
          className
        )}
      ></span>
    )
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["default", "small", "large"]),
  className: PropTypes.string,
};

export default Loading;
