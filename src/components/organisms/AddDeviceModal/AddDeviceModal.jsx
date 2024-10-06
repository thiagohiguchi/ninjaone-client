import React, { useEffect, useState } from "react";
import Modal from "../../molecules/Modal/Modal";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import DeviceTypeIcon from "../../atoms/DeviceTypeIcon/DeviceTypeIcon";

export const AddDeviceModal = () => {
  const sortByCriteria = [
    "DEFAULT",
    "NAME-ASC",
    "NAME-DESC",
    "HDD-ASC",
    "HDD-DESC",
  ];
  const filterDeviceCriteria = ["ALL", "WINDOWS", "LINUX", "MAC"];

  const [data, setData] = useState([]); // State to hold the fetched data
  const [filteredDevices, setFilteredDevices] = useState(data); // Initialize with all users
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error

  const [searchTerm, setSearchTerm] = useState("");
  const [deviceTypeFilter, setDeviceTypeFilter] = useState(
    filterDeviceCriteria.slice(1)
  );
  const [sortBy, setSortBy] = useState(sortByCriteria[0]);

  const handleAdd = () => {
    console.log(`add`);
  };

  const handleEdit = (id) => {
    // console.log(`edit`, id);
  };

  const handleDelete = (id) => {
    // console.log(`delete`, id);
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
      if (isChecked) setDeviceTypeFilter(filterDeviceCriteria.slice(1));
      else setDeviceTypeFilter([]);
    }
  };

  const checkFilterByDeviceType = (clickedDeviceType) => {
    // If every item is in the list, then return true regardless
    if (deviceTypeFilter.length === filterDeviceCriteria.length - 1)
      return true;

    return deviceTypeFilter.includes(clickedDeviceType);
  };

  const generateFilterByDeviceLabel = () => {
    let label = "Device Type: ";

    if (checkFilterByDeviceType("ALL")) label += "All";
    else {
      for (let i = 0; i < deviceTypeFilter.length; i++) {
        label += `${deviceTypeFilter[i]}, `;
      }
      label = label.slice(0, -2);
    }
    return label;
  };

  const handleSortCriteria = (criteria) => {
    setSortBy(criteria);
  };

  const handleResetFilters = () => {
    setLoading(true);
    setSearchTerm("");
    setDeviceTypeFilter(filterDeviceCriteria.slice(1));
    setSortBy(sortByCriteria[0]);

    fetchDevicesData();
  };

  const filterAndSortDevices = () => {
    console.log(`filterAndSortDevices`);
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
    if (sortBy !== sortByCriteria[0]) {
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
    try {
      const response = await fetch("http://localhost:3000/devices");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData); // Set the fetched data to state
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after the fetch is done
    }
  };

  useEffect(() => {
    fetchDevicesData(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Trigger filtering after data/filters/sorting is updated
  useEffect(() => {
    filterAndSortDevices(); // Call the filter function after data is fetched
  }, [data, searchTerm, deviceTypeFilter, sortBy]);

  return <Modal id="test"></Modal>;
};

export default AddDeviceModal;
