import React, { useState, useEffect } from "react";
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

export const UpdateDeviceModal = ({ device, onSuccess, onClose }) => {
  const { t } = useTranslation();

  const MODAL_ID = "update-device";
  const [editedDevice, setEditedDevice] = useState({
    system_name: "",
    type: "",
    hdd_capacity: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(false); // State to manage error
  const [showAlert, setShowAlert] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleTimeoutAlert = () => {
    setShowAlert(false); // Hide the message after timeout
  };

  const editValueHandle = (value) => {
    setEditedDevice(value);
  };

  const isValidUpdateHandle = (value) => {
    setIsValid(value);
  };

  const updateDevice = async () => {
    setLoading(true);
    await delay(REQUEST_DELAY); // Add default delay to present locking mechanisms and animations

    fetch(`${apiUrl}/devices/${editedDevice.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_name: editedDevice.system_name,
        type: editedDevice.type,
        hdd_capacity: editedDevice.hdd_capacity,
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

        setData(true);
        onSuccess(editedDevice);
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

  useEffect(() => {
    if (device !== null) {
      setEditedDevice(device);
    }
  }, [device]);

  return (
    <>
      <Modal
        modalId={MODAL_ID}
        isVisible={device !== null}
        onClose={() => onClose()}
      >
        {device != null ? (
          <>
            <h4 className="text-lg leading-lg mb-6">{t("editDevice")}</h4>

            <EditDeviceFields
              device={editedDevice}
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
                  onClick={() => updateDevice()}
                  className={cx((loading || !isValid) && "btn-disabled")}
                  disabled={loading}
                />
              </div>
            </div>
          </>
        ) : (
          <span></span>
        )}
      </Modal>

      <Alert
        type={error || data === false ? "error" : "success"}
        message={
          !error || data === true
            ? t("updateDeviceSuccessMessage")
            : t("updateDeviceErrorMessage")
        }
        isVisible={showAlert}
        onTimeout={handleTimeoutAlert}
      />
    </>
  );
};

// Add PropTypes validation
UpdateDeviceModal.propTypes = {
  device: PropTypes.object,
  onSuccess: PropTypes.func,
  onClose: PropTypes.func,
};

export default UpdateDeviceModal;
