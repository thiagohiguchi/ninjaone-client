import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { cx } from "classix";
import { delay } from "../../../utils";
import { REQUEST_DELAY } from "../../../constants/config";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import Alert from "../../atoms/Alert/Alert";
import EditDeviceFields from "../../molecules/EditDeviceFields/EditDeviceFields";
import { Modal, closeModal } from "../../molecules/Modal/Modal";

export const AddDeviceModal = ({ onSuccess, onClose }) => {
  const { t } = useTranslation();

  const MODAL_ID = "add-device";
  const [newDevice, setNewDevice] = useState({
    system_name: "",
    type: "",
    hdd_capacity: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(false); // State to manage error
  const [showAlert, setShowAlert] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleTimeoutAlert = () => {
    setShowAlert(false); // Hide the message after timeout
  };

  const editValueHandle = (value) => {
    setNewDevice(value);
  };

  const isValidUpdateHandle = (value) => {
    setIsValid(value);
  };

  const isEmpty = () => {
    return (
      newDevice.system_name === "" ||
      newDevice.type === "" ||
      newDevice.hdd_capacity === ""
    );
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
        setNewDevice({});
        closeModal(MODAL_ID);
      });
  };

  return (
    <>
      <Modal
        modalId={MODAL_ID}
        onClose={() => {
          setNewDevice({
            system_name: "",
            type: "",
            hdd_capacity: "",
          });
          onClose();
        }}
      >
        <>
          <h4 className="text-lg leading-lg mb-6">{t("addDevice")}</h4>

          <EditDeviceFields
            device={newDevice}
            onIsValidUpdate={isValidUpdateHandle}
            onUpdate={editValueHandle}
          />

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
                  (loading || !isValid || isEmpty()) && "btn-disabled"
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
