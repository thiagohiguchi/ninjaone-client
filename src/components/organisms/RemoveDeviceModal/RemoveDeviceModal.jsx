import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { cx } from "classix";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import { Modal, closeModal } from "../../molecules/Modal/Modal";
import Alert from "../../atoms/Alert/Alert";

export const RemoveDeviceModal = ({ id, deviceName, onSuccess }) => {
  const { t } = useTranslation();

  const [showAlert, setShowAlert] = useState(true); // Initially hide the alert
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error
  const apiUrl = import.meta.env.VITE_API_URL;

  const deleteDevice = async (id) => {
    console.log("RemoveDeviceModal", id);

    fetch(`${apiUrl}/devices/${id}`, { method: "DELETE" })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok || data === 0) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
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
        closeModal(id);
      });
  };

  useEffect(() => {
    console.log(`useEffect RemoveDeviceModal`);
    const timer = setTimeout(() => {
      setShowAlert(false); // Hide the alert after 3 seconds
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
  }, [data]);

  return (
    <>
      <Modal id={id}>
        <h4 className="text-base leading-7 mb-6">{t("devices")}</h4>
        <div className="mb-8">
          <p className="">{t("deleteDeviceMessage", { name: deviceName })}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <Loading isLoading={loading} size="small" className="" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              label={t("cancel")}
              size="small"
              onClick={() => closeModal(id)}
              className={cx("btn-outline", loading && "btn-disabled")}
              disabled={loading}
            />
            <Button
              label={t("delete")}
              size="small"
              onClick={() => deleteDevice(id)}
              className={cx("btn-error", loading && "btn-disabled")}
              disabled={loading}
            />
          </div>
        </div>
      </Modal>
      {showAlert && data !== null && (
        <Alert
          type={error || data === false ? "error" : "success"}
          message={
            error || data === true
              ? t("deleteDeviceErrorMessage")
              : t("deleteDeviceSuccessMessage")
          }
        />
      )}
    </>
  );
};

// Add PropTypes validation
RemoveDeviceModal.propTypes = {
  id: PropTypes.string.isRequired,
  deviceName: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default RemoveDeviceModal;
