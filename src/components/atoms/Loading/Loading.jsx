import { React } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Loading = ({ isLoading, className }) => {
  return (
    isLoading && (
      <span
        className={cx("loading loading-spinner loading-lg m-auto", className)}
      ></span>
    )
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Loading;
