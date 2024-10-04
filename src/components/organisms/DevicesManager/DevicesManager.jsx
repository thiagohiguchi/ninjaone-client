import { React } from "react";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";
import DeviceTypeIcon from "../../atoms/DeviceTypeIcon/DeviceTypeIcon";

export const DevicesManager = () => {
  return (
    <div className="py-6">
      <div className="max-width w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-[20px]">Devices</h4>
          <div className="">
            <Button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 8C14.5 8.4375 14.1562 8.75 13.75 8.75H8.75V13.75C8.75 14.1875 8.40625 14.5312 8 14.5312C7.5625 14.5312 7.25 14.1875 7.25 13.75V8.75H2.25C1.8125 8.75 1.5 8.4375 1.5 8.03125C1.5 7.59375 1.8125 7.25 2.25 7.25H7.25V2.25C7.25 1.84375 7.5625 1.53125 8 1.53125C8.40625 1.53125 8.75 1.84375 8.75 2.25V7.25H13.75C14.1562 7.25 14.5 7.59375 14.5 8Z"
                  fill="#595766"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-start gap-2">
            <div className="">
              <Input type="text" placeholder="batata" />
            </div>
            <div className="">
              <Dropdown />
            </div>
            <div className="">dropdown</div>
          </div>
          refresh
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
              <div className="">Edit/Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesManager;
