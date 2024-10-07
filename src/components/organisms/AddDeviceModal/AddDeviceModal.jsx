import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { cx } from "classix";
import { delay } from "../../../utils";
import {
  FILTER_DEVICE_CRITERIA,
  REQUEST_DELAY,
} from "../../../constants/config";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import Alert from "../../atoms/Alert/Alert";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import { Modal, closeModal } from "../../molecules/Modal/Modal";

export const AddDeviceModal = ({ onSuccess, onClose }) => {
  const { t } = useTranslation();

  const MODAL_ID = "add-device";
  const DEVICE_TYPE = FILTER_DEVICE_CRITERIA.slice(1);
  const [newDevice, setNewDevice] = useState({
    system_name: "",
    type: "",
    hdd_capacity: "",
  });
  const [editedDeviceErrors, setEditedDeviceErrors] = useState({
    system_name: [],
    type: [],
    hdd_capacity: [],
  });
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(false); // State to manage error
  const [showAlert, setShowAlert] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const validateFields = (event) => {
    let tempErrors = [];
    const { name, value } = event.target;

    switch (name) {
      case "system_name":
        if (!value) {
          tempErrors.push(t("systemNameRequired"));
        } else if (!/^[A-Z0-9-]+$/.test(value)) {
          // Only uppercase letters, numbers and -
          tempErrors.push(t("systemNameWrongValue"));
        }
        break;
      case "type":
        break;
      case "hdd_capacity":
        if (!value) {
          tempErrors.push(t("hddCapacityRequired"));
        } else if (isNaN(value) || Number(value) <= 0) {
          tempErrors.push(t("hddCapacityWrongValue"));
        } else if (!/^-?\d+$/.test(value)) {
          tempErrors.push(t("hddCapacityDecimaValue"));
        }
        break;
    }

    // setEditedDeviceErrors(tempErrors);
    setEditedDeviceErrors((prevFormData) => ({
      ...prevFormData,
      [name]: tempErrors, // This updates the property that matches the input name
    }));
  };

  const checkSingleFieldErrors = (field) => {
    return editedDeviceErrors[field] && editedDeviceErrors[field].length > 0;
  };

  const showFieldErrors = (field) => {
    if (checkSingleFieldErrors(field)) {
      return editedDeviceErrors[field].map((error, i) => {
        return (
          <label
            htmlFor="name"
            className="text-sm leading-md text-error -mt-1"
            key={`${field}${i}`}
          >
            {error}
          </label>
        );
      });
    }
    return null;
  };

  const handleTimeoutAlert = () => {
    setShowAlert(false); // Hide the message after timeout
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state dynamically by using the input name as the key
    setNewDevice((prevFormData) => ({
      ...prevFormData,
      [name]: value, // This updates the property that matches the input name
    }));

    validateFields(event);
  };

  const addDevice = async () => {
    setLoading(true);
    await delay(REQUEST_DELAY); // Add default delay to present locking mechanisms and animations

    fetch(`${apiUrl}/devices/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_name: newDevice.system_name,
        type: newDevice.type,
        hdd_capacity: newDevice.hdd_capacity,
      }),
    })
      .then(async (response) => {
        const r = await response.json();

        // check for error response
        if (!response.ok || r === 0) {
          // get error message from body or default to response status
          const error = (r && r.message) || response.status;
          setData(false);
          return Promise.reject(error);
        }

        setNewDevice({});
        setData(true);
        onSuccess(newDevice);
      })
      .catch((error) => {
        setData(false);
        setError(error);
        console.error("There was an error!", error);
      })
      .finally(() => {
        setLoading(false);
        setShowAlert(true);
        closeModal(MODAL_ID);
      });
  };

  return (
    <>
      <Modal modalId={MODAL_ID} onClose={() => onClose()}>
        <>
          <h4 className="text-lg leading-lg mb-6">{t("editDevice")}</h4>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-sm leading-md">
                {`${t("systemName")}*`}
              </label>
              <Input
                type="text"
                placeholder={t("systemName")}
                value={newDevice.system_name}
                onChange={handleInputChange}
                className={cx(
                  "w-full",
                  checkSingleFieldErrors("system_name") && "input-error"
                )}
                name="system_name"
              />
              {showFieldErrors("system_name")}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="type" className="text-sm leading-md">
                {`${t("deviceType")}*`}
              </label>
              {/* <Input
                  type="text"
                  placeholder={t("deviceType")}
                  value={newDevice.type}
                  onChange={handleInputChange}
                  className={cx(
                    "w-full",
                    checkSingleFieldErrors("type") && "input-error"
                  )}
                  name="type"
                /> */}
              <Dropdown
                position="bottom"
                name={t("filterByDeviceType")}
                items={DEVICE_TYPE.map((deviceType) => (
                  <button
                    onClick={() =>
                      handleInputChange({
                        target: { name: "type", value: deviceType },
                      })
                    }
                    key={deviceType}
                  >
                    <span className="">{t(deviceType)}</span>
                  </button>
                ))}
                className="btn btn-outline w-full"
              >
                <div className="flex items-center gap-2 justify-between w-full">
                  <span className="">
                    {newDevice.type ? t(newDevice.type) : ""}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6875 7.71875L8.71875 11.7188C8.5 11.9062 8.25 12 8 12C7.71875 12 7.46875 11.9062 7.28125 11.7188L3.3125 7.71875C3 7.4375 2.90625 7 3.0625 6.625C3.21875 6.25 3.59375 6 4 6H11.9688C12.375 6 12.7188 6.25 12.875 6.625C13.0312 7 12.9688 7.4375 12.6875 7.71875Z"
                      fill="#6E6D7A"
                    />
                  </svg>
                </div>
              </Dropdown>
              {showFieldErrors("type")}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="hdd_capacity" className="text-sm leading-md">
                {`${t("hddCapacityGb")}*`}
              </label>
              <Input
                type="number"
                placeholder={t("hddCapacityGb")}
                value={newDevice.hdd_capacity}
                onChange={handleInputChange}
                className={cx(
                  "w-full uppercase",
                  checkSingleFieldErrors("hdd_capacity") && "input-error"
                )}
                name="hdd_capacity"
              />
              {showFieldErrors("hdd_capacity")}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex">
              <Loading isLoading={loading} size="small" className="" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button
                label={t("cancel")}
                size="small"
                onClick={() => closeModal(MODAL_ID)}
                className={cx("btn-outline", loading && "btn-disabled")}
                disabled={loading}
              />
              <Button
                type="primary"
                label={t("submit")}
                size="small"
                onClick={() => addDevice()}
                className={cx(
                  (loading ||
                    checkSingleFieldErrors("system_name") ||
                    checkSingleFieldErrors("type") ||
                    checkSingleFieldErrors("hdd_capacity")) &&
                    "btn-disabled"
                )}
                disabled={loading}
              />
            </div>
          </div>
        </>
      </Modal>

      <Alert
        type={error || data === false ? "error" : "success"}
        message={
          !error || data === true
            ? t("addDeviceSuccessMessage")
            : t("addDeviceErrorMessage")
        }
        isVisible={showAlert}
        onTimeout={handleTimeoutAlert}
      />
    </>
  );
};

// Add PropTypes validation
AddDeviceModal.propTypes = {
  onSuccess: PropTypes.func,
  onClose: PropTypes.func,
};

export default AddDeviceModal;
