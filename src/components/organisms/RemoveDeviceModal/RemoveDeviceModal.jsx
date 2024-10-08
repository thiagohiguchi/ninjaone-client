import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { cx } from "classix";
import { delay } from "../../../utils";
import { REQUEST_DELAY } from "../../../constants/config";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import { Modal, closeModal } from "../../molecules/Modal/Modal";
import Alert from "../../atoms/Alert/Alert";

export const RemoveDeviceModal = ({ device, onSuccess, onClose }) => {
  const { t } = useTranslation();

  const MODAL_ID = "delete-device";
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(false); // State to manage error
  const [showAlert, setShowAlert] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleTimeoutAlert = () => {
    setShowAlert(false); // Hide the message after timeout
  };

  const deleteDevice = async (id) => {
    setLoading(true);
    await delay(REQUEST_DELAY); // Add default delay to present locking mechanisms and animations

    fetch(`${apiUrl}/devices/${id}`, { method: "DELETE" })
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
        onSuccess();
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
      <Modal
        modalId={MODAL_ID}
        isVisible={device !== null}
        onClose={() => onClose()}
      >
        {device != null ? (
          <>
            <h4 className="text-lg leading-lg mb-6">{t("deleteDevice")}</h4>
            <div className="mb-8">
              <p className="text-sm leading-sm">
                {t("deleteDeviceMessage", { name: device.system_name })}
              </p>
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
                  label={t("delete")}
                  size="small"
                  onClick={() => deleteDevice(device.id)}
                  className={cx(
                    "btn-error text-white",
                    loading && "btn-disabled"
                  )}
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
            ? t("deleteDeviceSuccessMessage")
            : t("deleteDeviceErrorMessage")
        }
        isVisible={showAlert}
        onTimeout={handleTimeoutAlert}
      />
    </>
  );
};

// Add PropTypes validation
RemoveDeviceModal.propTypes = {
  device: PropTypes.object,
  onSuccess: PropTypes.func,
  onClose: PropTypes.func,
};

export default RemoveDeviceModal;
