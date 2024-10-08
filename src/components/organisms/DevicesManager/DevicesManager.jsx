import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SORT_BY_CRITERIA,
  FILTER_DEVICE_CRITERIA,
  REQUEST_DELAY,
} from "../../../constants/config";
import { delay } from "../../../utils";
import { cx } from "classix";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import DeviceTypeIcon from "../../atoms/DeviceTypeIcon/DeviceTypeIcon";
import RemoveDeviceModal from "../RemoveDeviceModal/RemoveDeviceModal";
import UpdateDeviceModal from "../UpdateDeviceModal/UpdateDeviceModal";
import AddDeviceModal from "../AddDeviceModal/AddDeviceModal";

export const DevicesManager = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]); // State to hold the fetched data
  const [filteredDevices, setFilteredDevices] = useState(data); // Initialize with all users
  const [activeDevice, setActiveDevice] = useState(null); // State to hold the fetched data
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const apiUrl = import.meta.env.VITE_API_URL;

  const [searchTerm, setSearchTerm] = useState("");
  const [deviceTypeFilter, setDeviceTypeFilter] = useState(
    FILTER_DEVICE_CRITERIA.slice(1)
  );
  const [sortBy, setSortBy] = useState(SORT_BY_CRITERIA[0]);

  const handleModal = (deviceId, modalAction) => {
    const device = filteredDevices.filter((device) => device.id == deviceId)[0];

    if (device) {
      if (activeDevice !== null && device.id === activeDevice.id) {
        document.getElementById(activeDevice.action).showModal();
      } else {
        device.action = modalAction;
        setActiveDevice(device);
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterByDeviceType = (event) => {
    const clickedDeviceType = event.target.value;
    const isChecked = event.target.checked;

    // Add or remove device type criteria based on whether the checkbox is checked or unchecked
    if (clickedDeviceType !== "ALL") {
      if (isChecked) {
        setDeviceTypeFilter((deviceTypeFilter) => [
          ...deviceTypeFilter,
          clickedDeviceType,
        ]);
      } else {
        setDeviceTypeFilter((deviceTypeFilter) =>
          deviceTypeFilter.filter((h) => h !== clickedDeviceType)
        );
      }
    }

    if (clickedDeviceType === "ALL") {
      if (isChecked) setDeviceTypeFilter(FILTER_DEVICE_CRITERIA.slice(1));
      else setDeviceTypeFilter([]);
    }
  };

  const handleShowHideFilters = () => {
    setShowFiltersMobile(!showFiltersMobile);
  };

  const onSuccessAddedDevice = () => {
    fetchDevicesData();
  };

  const onSuccessEditedDevice = (deviceUpdated) => {
    const newData = data.map((device) => {
      if (device.id === deviceUpdated.id) {
        return {
          ...device,
          ...deviceUpdated,
        }; // Return updated device object
      }
      return device;
    });

    setActiveDevice(null);
    setData(newData); // Update state to add the updated device
  };

  const onSuccessDeletedDevice = () => {
    let newData = data.filter((device) => device.id !== activeDevice.id);

    setData(newData); // Update state to remove the deleted device
    setActiveDevice(null);
  };

  const checkFilterByDeviceType = (clickedDeviceType) => {
    // If every item is in the list, then return true regardless
    if (deviceTypeFilter.length === FILTER_DEVICE_CRITERIA.length - 1)
      return true;

    return deviceTypeFilter.includes(clickedDeviceType);
  };

  const generateFilterByDeviceLabel = () => {
    let label = `${t("deviceType")}: `;

    if (checkFilterByDeviceType("ALL")) label += t("ALL");
    else {
      for (let i = 0; i < deviceTypeFilter.length; i++) {
        label += `${t(deviceTypeFilter[i])}, `;
      }
      label = label.slice(0, -2);
    }
    return label;
  };

  const handleSortCriteria = (criteria) => {
    setSortBy(criteria);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setDeviceTypeFilter(FILTER_DEVICE_CRITERIA.slice(1));
    setSortBy(SORT_BY_CRITERIA[0]);

    fetchDevicesData();
  };

  const filterAndSortDevices = () => {
    let filtered = data;

    // Filter devices based on the search term
    if (searchTerm) {
      filtered = filtered.filter((device) =>
        device.system_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter devices based on the device type
    if (deviceTypeFilter.length) {
      filtered = filtered.filter((device) =>
        deviceTypeFilter.includes(device.type)
      );
    } else filtered = [];

    // Sort
    if (sortBy !== SORT_BY_CRITERIA[0]) {
      switch (sortBy) {
        case "NAME-ASC":
          filtered = filtered.sort((a, b) => {
            if (a.system_name < b.system_name) return -1; // a comes before b
            if (a.system_name > b.system_name) return 1; // a comes after b
            return 0;
          });
          break;
        case "NAME-DESC":
          filtered = filtered.sort((a, b) => {
            if (a.system_name > b.system_name) return -1; // a comes before b
            if (a.system_name < b.system_name) return 1; // a comes after b
            return 0;
          });
          break;
        case "HDD-ASC":
          filtered = filtered.sort(
            (a, b) => parseInt(a.hdd_capacity) - parseInt(b.hdd_capacity)
          );
          break;
        case "HDD-DESC":
          filtered = filtered.sort(
            (a, b) => parseInt(b.hdd_capacity) - parseInt(a.hdd_capacity)
          );
          break;
      }
    }

    setFilteredDevices(filtered); // Update state with filtered users
  };

  const fetchDevicesData = async () => {
    setLoading(true);
    await delay(REQUEST_DELAY); // Add default delay to present locking mechanisms and animations

    try {
      const response = await fetch(`${apiUrl}/devices`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData); // Set the fetched data to state
    } catch (err) {
      console.log(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after the fetch is done
    }
  };

  useEffect(() => {
    if (activeDevice !== null)
      document.getElementById(activeDevice.action).showModal();
  }, [activeDevice]);

  useEffect(() => {
    fetchDevicesData(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Trigger filtering after data/filters/sorting is updated
  useEffect(() => {
    filterAndSortDevices(); // Call the filter function after data is fetched
  }, [data, searchTerm, deviceTypeFilter, sortBy]);

  return (
    <div className="pt-6 pb-12">
      <div className="max-w-internal w-9/10 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-[20px]">{t("devices")}</h4>
          <div className="">
            <Button
              type="primary"
              size="small"
              label={t("addDevice")}
              onClick={() => document.getElementById("add-device").showModal()}
            >
              <div className="flex gap-1 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 8C14.5 8.4375 14.1562 8.75 13.75 8.75H8.75V13.75C8.75 14.1875 8.40625 14.5312 8 14.5312C7.5625 14.5312 7.25 14.1875 7.25 13.75V8.75H2.25C1.8125 8.75 1.5 8.4375 1.5 8.03125C1.5 7.59375 1.8125 7.25 2.25 7.25H7.25V2.25C7.25 1.84375 7.5625 1.53125 8 1.53125C8.40625 1.53125 8.75 1.84375 8.75 2.25V7.25H13.75C14.1562 7.25 14.5 7.59375 14.5 8Z"
                    fill="#ffffff"
                  />
                </svg>
                <span className="text-white">{t("addDevice")}</span>
              </div>
            </Button>
            {/* <AddDeviceModal id="addDevice"></AddDeviceModal> */}
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between items-start lg:flex-row lg:items-center mb-4">
          <div className="flex justify-center w-full lg:max-w-fit">
            <div
              className={cx(
                "lg:flex flex-col lg:flex-row justify-start items-center gap-2 py-4 lg:py-0 max-h-0 lg:max-h-full hidden",
                showFiltersMobile && "max-h-full !flex"
              )}
            >
              <div className="">
                <Input
                  type="text"
                  placeholder={t("search")}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-screen max-w-64"
                  name={t("search")}
                  aria-label={t("search")}
                  icon={
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
                        fill="#6E6D7A"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="">
                <Dropdown
                  position="bottom"
                  name={t("filterByDeviceType")}
                  closeOnClickItem={false}
                  items={FILTER_DEVICE_CRITERIA.map((deviceType) => (
                    <label
                      className="label justify-start cursor-pointer"
                      key={deviceType}
                    >
                      <input
                        type="checkbox"
                        value={deviceType}
                        className="checkbox checkbox-sm checkbox-primary"
                        onChange={handleFilterByDeviceType}
                        checked={checkFilterByDeviceType(deviceType)}
                      />
                      <span className="label-text">{t(deviceType)}</span>
                    </label>
                  ))}
                  className="btn btn-outline"
                >
                  <div className="flex items-center gap-2">
                    <span className="">{generateFilterByDeviceLabel()}</span>
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
              </div>
              <div className="">
                <Dropdown
                  position="bottom"
                  name={t("sortBy")}
                  items={SORT_BY_CRITERIA.map((sortItem) => (
                    <button
                      onClick={() => handleSortCriteria(sortItem)}
                      key={sortItem}
                    >
                      <span className="">{t(sortItem)}</span>
                    </button>
                  ))}
                  className="btn btn-outline"
                >
                  <div className="flex items-center gap-2">
                    <span className="">{`${t("sortBy")}: ${t(sortBy)}`}</span>
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
              </div>
            </div>
          </div>

          <div className="flex gap-3 ml-auto">
            <div className="lg:hidden">
              <Button
                type="icon"
                label={t("showAndHideFilters")}
                size="small"
                onClick={handleShowHideFilters}
                className="btn-square p-0"
              >
                <svg
                  fill="#595766"
                  height="16"
                  width="16"
                  version="1.1"
                  viewBox="0 0 300.906 300.906"
                >
                  <path
                    d="M288.953,0h-277c-5.522,0-10,4.478-10,10v49.531c0,5.522,4.478,10,10,10h12.372l91.378,107.397v113.978
			c0,3.688,2.03,7.076,5.281,8.816c1.479,0.792,3.101,1.184,4.718,1.184c1.94,0,3.875-0.564,5.548-1.68l49.5-33
			c2.782-1.854,4.453-4.977,4.453-8.32v-80.978l91.378-107.397h12.372c5.522,0,10-4.478,10-10V10C298.953,4.478,294.476,0,288.953,0
			z M167.587,166.77c-1.539,1.809-2.384,4.105-2.384,6.48v79.305l-29.5,19.666V173.25c0-2.375-0.845-4.672-2.384-6.48L50.585,69.531
			h199.736L167.587,166.77z M278.953,49.531h-257V20h257V49.531z"
                  />
                </svg>
              </Button>
            </div>
            <div
              className="tooltip tooltip-left"
              data-tip={t("resetAndUpdateDevices")}
            >
              <Button
                type="icon"
                label={t("resetFilters")}
                size="small"
                onClick={handleResetFilters}
                className="btn-square p-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 1C14.2188 1 14 1.25 14 1.5V5.5625C13 3.125 10.625 1.5 8 1.5C4.8125 1.5 2.09375 3.78125 1.5625 6.9375C1.53125 7.21875 1.71875 7.46875 2 7.5C2 7.5 2.03125 7.5 2.0625 7.5C2.3125 7.5 2.53125 7.34375 2.5625 7.09375C3 4.4375 5.28125 2.5 8 2.5C10.25 2.5 12.2812 3.90625 13.0938 6H9.5C9.21875 6 9 6.25 9 6.5C9 6.78125 9.21875 7 9.5 7H14.5C14.75 7 15 6.78125 15 6.5V1.5C15 1.25 14.75 1 14.5 1ZM13.9688 8.53125C13.6875 8.46875 13.4375 8.65625 13.375 8.9375C12.9688 11.5938 10.6875 13.5 7.96875 13.5C5.6875 13.5 3.65625 12.125 2.84375 10H6.5C6.75 10 7 9.78125 7 9.5C7 9.25 6.75 9 6.5 9H1.5C1.21875 9 1 9.25 1 9.5V14.5C1 14.7812 1.21875 15 1.5 15C1.75 15 2 14.7812 2 14.5V10.4688C2.96875 12.9062 5.34375 14.5 8 14.5C11.1562 14.5 13.875 12.25 14.4062 9.09375C14.4375 8.8125 14.25 8.5625 13.9688 8.53125Z"
                    fill="#595766"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col" data-cy="device-list">
          <div className="px-3 border-b border-b-[#CBCFD3]">
            <h5 className="py-2 font-medium text-[15px]">{t("device")}</h5>
          </div>
          {!loading && filteredDevices.length ? (
            filteredDevices.map((device) => (
              <div
                className="px-3 py-[9px] border-b border-b-[#E7E8EB] hover:bg-[#F4F4F5] focus:bg-[#F4F4F5]"
                key={device.id}
                data-cy="device-item"
              >
                <div className="flex flex-row justify-between items-center transition-all">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <DeviceTypeIcon type={device.type} />
                      <span className="font-medium text-[15px] leading-4 uppercase">
                        {device.system_name}
                      </span>
                    </div>
                    <span className="text-xs leading-[14px] text-[#6E6D7A]">
                      {t(device.type)} - {device.hdd_capacity} GB
                    </span>
                  </div>
                  <div className="">
                    <Dropdown
                      position="bottom-end"
                      name={t("editOrDelete")}
                      items={[
                        <button
                          onClick={() =>
                            handleModal(device.id, `update-device`)
                          }
                          key={`update-${device.id}`}
                        >
                          {t("edit")}
                        </button>,
                        <button
                          onClick={() =>
                            handleModal(device.id, `delete-device`)
                          }
                          className="text-error"
                          key={`delete-${device.id}`}
                        >
                          {t("delete")}
                        </button>,
                      ]}
                      className="btn btn-ghost btn-sm px-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 8C11.5 7.1875 12.1562 6.5 13 6.5C13.8125 6.5 14.5 7.1875 14.5 8C14.5 8.84375 13.8125 9.5 13 9.5C12.1562 9.5 11.5 8.84375 11.5 8ZM6.5 8C6.5 7.1875 7.15625 6.5 8 6.5C8.8125 6.5 9.5 7.1875 9.5 8C9.5 8.84375 8.8125 9.5 8 9.5C7.15625 9.5 6.5 8.84375 6.5 8ZM4.5 8C4.5 8.84375 3.8125 9.5 3 9.5C2.15625 9.5 1.5 8.84375 1.5 8C1.5 7.1875 2.15625 6.5 3 6.5C3.8125 6.5 4.5 7.1875 4.5 8Z"
                          fill="#595766"
                        />
                      </svg>
                    </Dropdown>
                  </div>
                </div>
              </div>
            ))
          ) : !loading && filteredDevices.length === 0 ? (
            <p className="pt-6 px-3">{t("thereAreNoDevices")}</p>
          ) : (
            <Loading isLoading={loading} size="large" className="my-9" />
          )}

          <RemoveDeviceModal
            device={activeDevice}
            onSuccess={() => onSuccessDeletedDevice()}
            onClose={() => setActiveDevice(null)}
          />

          <UpdateDeviceModal
            device={activeDevice}
            onSuccess={onSuccessEditedDevice}
            onClose={() => setActiveDevice(null)}
          />

          <AddDeviceModal
            onSuccess={onSuccessAddedDevice}
            onClose={() => setActiveDevice(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default DevicesManager;
