import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { FILTER_DEVICE_CRITERIA } from "../../../constants/config";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";

export const EditDeviceFields = ({
  device = null,
  onUpdate,
  onIsValidUpdate,
}) => {
  const { t } = useTranslation();

  const DEVICE_TYPE = FILTER_DEVICE_CRITERIA.slice(1);
  const [deviceErrors, setDeviceErrors] = useState({
    system_name: [],
    type: [],
    hdd_capacity: [],
  });

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

    setDeviceErrors((prevFormData) => ({
      ...prevFormData,
      [name]: tempErrors, // This updates the property that matches the input name
    }));
  };

  const checkSingleFieldErrors = (field) => {
    return deviceErrors[field] && deviceErrors[field].length > 0;
  };

  const showFieldErrors = (field) => {
    if (checkSingleFieldErrors(field)) {
      return deviceErrors[field].map((error, i) => {
        return (
          <label
            htmlFor="name"
            className="text-[12px] leading-tight text-error -mt-[2px]"
            key={`${field}${i}`}
          >
            {error}
          </label>
        );
      });
    }
    return null;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state dynamically by using the input name as the key
    onUpdate((prevFormData) => ({
      ...prevFormData,
      [name]: value, // This updates the property that matches the input name
    }));

    validateFields(event);
  };

  useEffect(() => {
    onIsValidUpdate(
      !(
        checkSingleFieldErrors("system_name") ||
        checkSingleFieldErrors("hdd_capacity") ||
        checkSingleFieldErrors("type")
      )
    );
  }, [deviceErrors]);

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="text-sm leading-md">
          {`${t("systemName")}*`}
        </label>
        <Input
          type="text"
          placeholder={t("systemName")}
          value={device.system_name}
          onChange={handleInputChange}
          className="w-full"
          name="system_name"
          error={checkSingleFieldErrors("system_name")}
        />
        {showFieldErrors("system_name")}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="type" className="text-sm leading-md">
          {`${t("deviceType")}*`}
        </label>
        <Dropdown
          position="bottom"
          name={t("deviceType")}
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
            <span className="">{device.type ? t(device.type) : ""}</span>
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
          value={device.hdd_capacity}
          onChange={handleInputChange}
          className="w-full uppercase"
          name="hdd_capacity"
          error={checkSingleFieldErrors("hdd_capacity")}
        />
        {showFieldErrors("hdd_capacity")}
      </div>
    </div>
  );
};

// Add PropTypes validation
EditDeviceFields.propTypes = {
  device: PropTypes.object,
  onUpdate: PropTypes.func,
  onIsValidUpdate: PropTypes.func,
};

export default EditDeviceFields;
