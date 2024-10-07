import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { cx } from "classix";

export const Alert = ({
  type = "default",
  message,
  isVisible,
  onTimeout,
  className,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onTimeout(); // Notify parent component when the timeout is done
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isVisible, onTimeout]);

  return isVisible ? (
    <div
      role="alert"
      className={cx(
        "alert",
        "fixed bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2",
        "w-screen max-w-96 z-[1000]",
        type === "warning" && "alert-warning",
        type === "error" && "alert-error",
        type === "success" && "alert-success",
        className
      )}
    >
      {type === "default" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      )}
      {type === "warning" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      )}
      {type === "error" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {type === "success" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <span className="text-md leading-tight">{message}</span>
    </div>
  ) : null;
};

Alert.propTypes = {
  type: PropTypes.oneOf(["default", "warning", "error", "success"]),
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onTimeout: PropTypes.func,
  className: PropTypes.string,
};

export default Alert;
