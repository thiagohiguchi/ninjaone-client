import { React } from "react";
import PropTypes from "prop-types";

export const DeviceTypeIcon = ({ type = "windows" }) => {
  return (
    <>
      {type === "WINDOWS" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2.9375L6.71875 2.15625V7.6875H1V2.9375ZM1 13.0938L6.71875 13.875V8.40625H1V13.0938ZM7.34375 13.9688L15 15V8.40625H7.34375V13.9688ZM7.34375 2.0625V7.6875H15V1L7.34375 2.0625Z"
            fill="#595766"
          />
        </svg>
      )}
      {type === "LINUX" && (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.875 3.875C7.90625 3.875 7.9375 3.90625 7.96875 3.90625C8 3.90625 8.0625 3.90625 8.0625 3.875C8.0625 3.84375 8 3.8125 7.96875 3.78125C7.90625 3.75 7.84375 3.75 7.8125 3.78125C7.78125 3.78125 7.78125 3.8125 7.78125 3.8125C7.78125 3.84375 7.84375 3.84375 7.875 3.875ZM7.1875 3.90625C7.25 3.90625 7.25 3.875 7.28125 3.875C7.34375 3.84375 7.40625 3.84375 7.40625 3.8125C7.40625 3.8125 7.40625 3.78125 7.375 3.78125C7.34375 3.75 7.28125 3.75 7.21875 3.78125C7.1875 3.8125 7.09375 3.84375 7.125 3.875C7.125 3.90625 7.15625 3.9375 7.1875 3.90625ZM14.125 12.625C14 12.5 13.9375 12.2812 13.875 12.0312C13.8438 11.75 13.75 11.5 13.5625 11.3125C13.5312 11.2812 13.4688 11.25 13.4375 11.2188C13.4062 11.1875 13.3438 11.1875 13.3125 11.1562C13.5938 10.3125 13.4688 9.46875 13.1875 8.6875C12.8438 7.75 12.2188 6.9375 11.75 6.375C11.1875 5.6875 10.6875 5.0625 10.6875 4.125C10.7188 2.6875 10.8438 0.03125 8.3125 0C5.125 0 5.9375 3.25 5.875 4.25C5.84375 4.96875 5.6875 5.53125 5.1875 6.25C4.59375 6.96875 3.75 8.09375 3.375 9.28125C3.1875 9.84375 3.09375 10.4062 3.1875 10.9375C2.96875 11.125 2.8125 11.4062 2.65625 11.5938C2.53125 11.7188 2.34375 11.75 2.125 11.8438C1.90625 11.9062 1.6875 12.0312 1.5625 12.2812C1.46875 12.4062 1.46875 12.5312 1.46875 12.6875C1.46875 12.8125 1.46875 12.9375 1.5 13.0625C1.53125 13.3125 1.5625 13.5312 1.53125 13.6875C1.375 14.1562 1.34375 14.4688 1.46875 14.6875C1.5625 14.9062 1.8125 15.0312 2.09375 15.0625C2.625 15.1875 3.34375 15.1562 3.9375 15.4688C4.5625 15.7812 5.1875 15.9062 5.6875 15.7812C6.03125 15.7188 6.34375 15.5 6.5 15.1562C6.875 15.1562 7.3125 15 8 14.9375C8.46875 14.9062 9.0625 15.125 9.71875 15.0938C9.75 15.1562 9.78125 15.2188 9.8125 15.2812C10.0625 15.8125 10.5312 16.0625 11.0625 16C11.5938 15.9688 12.125 15.6562 12.5625 15.125C13 14.625 13.6875 14.4062 14.1562 14.125C14.4062 14 14.5938 13.8125 14.5938 13.5625C14.5938 13.3125 14.4688 13.0312 14.125 12.625ZM7.96875 2.75C8.28125 2.0625 9.03125 2.0625 9.34375 2.71875C9.5625 3.1875 9.46875 3.6875 9.21875 4C9.15625 3.96875 9.03125 3.90625 8.8125 3.84375C8.84375 3.8125 8.90625 3.75 8.9375 3.6875C9.09375 3.3125 8.9375 2.84375 8.65625 2.84375C8.4375 2.8125 8.21875 3.1875 8.28125 3.5625C8.15625 3.5 8 3.4375 7.875 3.4375C7.84375 3.21875 7.875 2.96875 7.96875 2.75ZM6.71875 2.375C7.03125 2.375 7.34375 2.8125 7.3125 3.4375C7.1875 3.46875 7.09375 3.5 6.96875 3.5625C7.03125 3.28125 6.875 2.9375 6.6875 2.96875C6.40625 2.96875 6.375 3.625 6.625 3.84375C6.65625 3.875 6.6875 3.84375 6.4375 4C5.96875 3.5625 6.125 2.375 6.71875 2.375ZM6.28125 4.28125C6.46875 4.125 6.71875 3.96875 6.71875 3.9375C6.875 3.8125 7.15625 3.5 7.59375 3.5C7.8125 3.5 8.09375 3.59375 8.40625 3.78125C8.59375 3.90625 8.75 3.9375 9.09375 4.0625C9.375 4.1875 9.53125 4.375 9.4375 4.65625C9.34375 4.875 9.09375 5.09375 8.71875 5.21875C8.375 5.3125 8.09375 5.71875 7.53125 5.6875C7.40625 5.65625 7.3125 5.65625 7.21875 5.625C6.96875 5.5 6.84375 5.28125 6.59375 5.15625C6.34375 5 6.1875 4.8125 6.15625 4.65625C6.09375 4.5 6.15625 4.375 6.28125 4.28125ZM6.375 14.7188C6.3125 15.8125 5 15.7812 4.03125 15.2812C3.09375 14.7812 1.875 15.0625 1.625 14.5938C1.5625 14.4375 1.5625 14.1875 1.71875 13.7812V13.75C1.78125 13.5312 1.75 13.25 1.6875 13.0312C1.65625 12.7812 1.65625 12.5625 1.71875 12.4062C1.84375 12.1875 2 12.0938 2.1875 12.0312C2.5 11.9375 2.5625 11.9375 2.8125 11.7188C2.96875 11.5625 3.09375 11.3125 3.25 11.1562C3.40625 11 3.5625 10.9062 3.8125 10.9375C4.0625 11 4.28125 11.1562 4.5 11.4375L5.09375 12.5625C5.40625 13.1875 6.4375 14.0625 6.375 14.7188ZM6.34375 13.9062C6.21875 13.6875 6.03125 13.4688 5.875 13.2812C6.125 13.2812 6.34375 13.2188 6.40625 13.0312C6.46875 12.8125 6.40625 12.5625 6.1875 12.25C5.75 11.6562 4.96875 11.2188 4.96875 11.2188C4.5625 10.9688 4.3125 10.625 4.21875 10.2812C4.09375 9.9375 4.125 9.5625 4.21875 9.1875C4.375 8.46875 4.78125 7.78125 5.0625 7.34375C5.125 7.28125 5.09375 7.4375 4.78125 8C4.53125 8.5 4.03125 9.65625 4.6875 10.5625C4.71875 9.90625 4.875 9.25 5.125 8.65625C5.5 7.78125 6.3125 6.3125 6.375 5.125C6.40625 5.15625 6.5 5.21875 6.5625 5.25C6.6875 5.34375 6.8125 5.46875 6.9375 5.5625C7.34375 5.875 7.84375 5.84375 8.28125 5.59375C8.46875 5.5 8.625 5.375 8.78125 5.3125C9.09375 5.21875 9.3125 5.0625 9.46875 4.84375C9.71875 5.8125 10.2812 7.1875 10.625 7.84375C10.8125 8.21875 11.1875 8.96875 11.375 9.875C11.4688 9.875 11.5938 9.875 11.7188 9.90625C12.125 8.78125 11.3438 7.59375 10.9688 7.25C10.8438 7.125 10.8125 7.0625 10.9062 7.0625C11.2812 7.40625 11.8125 8.09375 12 8.90625C12.0938 9.25 12.0938 9.625 12 10C12.5312 10.2188 13.125 10.5625 12.9688 11.0938C12.9062 11.0938 12.875 11.0938 12.8438 11.0938C12.9375 10.7812 12.7188 10.5625 12.125 10.2812C11.5 10.0312 11 10.0312 10.9375 10.6875C10.5625 10.8125 10.3438 11.125 10.25 11.5312C10.1875 11.875 10.1562 12.3125 10.125 12.7812C10.0938 13.0312 10 13.3438 9.90625 13.6875C8.90625 14.4062 7.5 14.7188 6.34375 13.9062ZM14.375 13.5625C14.3438 14.0625 13.0938 14.1562 12.4062 15C12 15.5 11.5 15.75 11.0312 15.8125C10.5938 15.8438 10.2188 15.6562 10 15.1875C9.84375 14.8438 9.90625 14.4688 10.0312 14.0625C10.1562 13.625 10.3125 13.1562 10.3438 12.7812C10.375 12.3125 10.375 11.9062 10.4688 11.5938C10.5625 11.25 10.6875 11.0312 10.9062 10.9375C10.9062 10.9062 10.9062 10.9062 10.9375 10.9062C10.9375 11.3125 11.1562 11.75 11.5 11.8438C11.9062 11.9375 12.4688 11.5938 12.7188 11.3125C13 11.3125 13.2188 11.2812 13.4062 11.4688C13.7188 11.75 13.6562 12.4375 13.9688 12.7812C14.2812 13.1562 14.4062 13.375 14.375 13.5625ZM6.40625 4.65625C6.46875 4.71875 6.5625 4.8125 6.65625 4.875C6.84375 5.03125 7.15625 5.21875 7.5 5.21875C7.875 5.21875 8.21875 5.03125 8.5 4.875C8.65625 4.78125 8.84375 4.65625 8.96875 4.5625C9.09375 4.4375 9.15625 4.34375 9.0625 4.34375C8.96875 4.34375 8.96875 4.4375 8.875 4.5C8.71875 4.59375 8.5625 4.75 8.4375 4.8125C8.21875 4.9375 7.8125 5.125 7.5 5.125C7.1875 5.125 6.90625 4.96875 6.71875 4.8125C6.625 4.75 6.53125 4.65625 6.46875 4.625C6.4375 4.5625 6.4375 4.46875 6.34375 4.46875C6.3125 4.46875 6.28125 4.5625 6.40625 4.65625Z"
            fill="#595766"
          />
        </svg>
      )}
      {type === "MAC" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9375 8.40625C11.9375 7.25 12.4688 6.40625 13.5 5.75C12.9062 4.90625 12.0312 4.46875 10.875 4.375C9.75 4.28125 8.53125 5 8.09375 5C7.625 5 6.5625 4.40625 5.71875 4.40625C3.96875 4.4375 2.125 5.78125 2.125 8.5625C2.125 9.375 2.25 10.2188 2.5625 11.0938C2.96875 12.25 4.40625 15.0625 5.90625 15C6.6875 15 7.25 14.4375 8.28125 14.4375C9.28125 14.4375 9.78125 15 10.6562 15C12.1875 15 13.5 12.4375 13.875 11.2812C11.8438 10.3125 11.9375 8.46875 11.9375 8.40625ZM10.1875 3.28125C11.0312 2.28125 10.9375 1.34375 10.9375 1C10.1875 1.0625 9.3125 1.53125 8.8125 2.09375C8.25 2.71875 7.9375 3.5 8 4.34375C8.8125 4.40625 9.5625 4 10.1875 3.28125Z"
            fill="#595766"
          />
        </svg>
      )}
    </>
  );
};

// Add PropTypes validation
DeviceTypeIcon.propTypes = {
  type: PropTypes.oneOf(["WINDOWS", "LINUX", "MAC"]).isRequired,
};

export default DeviceTypeIcon;
