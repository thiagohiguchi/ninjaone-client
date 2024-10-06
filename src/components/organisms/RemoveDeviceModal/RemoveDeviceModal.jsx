import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import Loading from "../../atoms/Loading/Loading";
import Modal from "../../molecules/Modal/Modal";

export const RemoveDeviceModal = ({ id, deviceName, onClick }) => {
  // const [data, setData] = useState([]); // State to hold the fetched data
  // const [loading, setLoading] = useState(true); // State to manage loading state
  // const [error, setError] = useState(null); // State to manage error
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleDelete = async (id) => {
    // // Optimistically remove the item from the UI
    // const newItems = items.filter((item) => item.id !== id);
    // setItems(newItems);

    // // Send the DELETE request
    // axios.delete(`${apiUrl}/devices/${id}`).catch((error) => {
    //   // If delete fails, restore the previous state
    //   console.error("Error deleting item:", error);
    //   setItems([...newItems, items.find((item) => item.id === id)]);
    // });

    // try {
    //   fetch(`${apiUrl}/devices/${id}`), {
    //     method: 'DELETE', // Specify the request method
    //   })
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   const jsonData = await response.json();
    //   setData(jsonData); // Set the fetched data to state
    // } catch (err) {
    //   setError(err.message); // Set error message if fetch fails
    // } finally {
    //   setLoading(false); // Set loading to false after the fetch is done
    // }

    fetch(`${apiUrl}/devices/${id}`, {
      method: "DELETE", // Specify the request method
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Depending on API, you might not need to parse JSON
      })
      .then((data) => {
        console.log("Post deleted:", data);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <Modal id={id}>
      <h4 className="text-base leading-7">Devices</h4>
      <p className="">
        You are about to delete the device {deviceName}. This action cannot be
        undone.
      </p>

      <div className="flex items-center justify-end gap-2">
        <Button
          label="Cancel"
          size="small"
          onClick={() => console.log("close")}
          className="btn-outline"
        />
        <Button
          label="Delete"
          size="small"
          onClick={handleDelete(id)}
          className="btn-error"
        />
      </div>
    </Modal>
  );
};

// Add PropTypes validation
RemoveDeviceModal.propTypes = {
  id: PropTypes.string.isRequired,
  //   type: PropTypes.oneOf(["primary", "icon"]).isRequired,
  //   size: PropTypes.oneOf(["default", "small"]),
  deviceName: PropTypes.string.isRequired,
  //   className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.arrayOf(PropTypes.object),
  // ]),
};

export default RemoveDeviceModal;
