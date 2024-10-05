import { React } from "react";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";
import DeviceTypeIcon from "../../atoms/DeviceTypeIcon/DeviceTypeIcon";

export const DevicesManager = () => {
  const handleAdd = () => {
    console.log(`add`);
  };

  const handleEdit = (id) => {
    console.log(`edit`, id);
  };

  const handleDelete = (id) => {
    console.log(`delete`, id);
  };

  const handleSortCriteria = (criteria) => {
    console.log(`sort criteria`, criteria);
  };

  const handleResetFilters = () => {
    console.log(`reset`);
  };

  const sortCriteria = ["name-asc", "name-desc", "hdd-asc", "hdd-desc"];

  return (
    <div className="py-6">
      <div className="max-width w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-[20px]">Devices</h4>
          <div className="">
            <Button type="primary" label="Add Device" onClick={handleAdd}>
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
                <span>Add Device</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-start items-center gap-2">
            <div className="">
              <Input type="text" placeholder="batata" />
            </div>
            <div className="">{/* <Dropdown /> */}</div>
            <div className="">
              <Dropdown
                position="bottom"
                name="Sort by"
                items={sortCriteria.map((sortItem) => (
                  <button onClick={handleSortCriteria(sortItem)} key={sortItem}>
                    <span className="">{sortItem}</span>
                  </button>
                ))}
                className="btn btn-outline"
              >
                <div className="flex items-center gap-2">
                  <span className="">Sort by: active</span>
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
          <Button
            type="icon"
            label="Reset Filters"
            size="small"
            onClick={handleResetFilters}
            className="btn-square"
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
        <div className="flex flex-col">
          <div className="px-3 border-b border-b-[#CBCFD3]">
            <h5 className="py-2 font-medium text-[15px]">Device</h5>
          </div>
          <div className="px-3 py-[9px] border-b border-b-[#E7E8EB] hover:bg-[#F4F4F5] focus:bg-[#F4F4F5]">
            <div className="flex flex-row justify-between items-center transition-all">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <DeviceTypeIcon type="windows" />
                  <span className="font-medium text-[15px] leading-4 uppercase">
                    device name
                  </span>
                </div>
                <span className="text-xs leading-[14px] text-[#6E6D7A]">
                  Windows - 120 GB
                </span>
              </div>
              <div className="">
                <Dropdown
                  position="bottom-end"
                  name="Edit or Delete"
                  items={[
                    <button onClick={handleEdit} key={`edit-${1}`}>
                      Edit
                    </button>,
                    <button
                      onClick={handleDelete}
                      className="text-error"
                      key={`delete-${1}`}
                    >
                      Del
                    </button>,
                  ]}
                  className="btn btn-ghost btn-square btn-sm"
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
        </div>
      </div>
    </div>
  );
};

export default DevicesManager;
