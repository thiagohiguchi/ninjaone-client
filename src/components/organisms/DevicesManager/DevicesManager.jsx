import { React } from "react";
import Input from "../../atoms/Input/Input";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";
// import logo from "../../assets/logos/NinjaOneLogo.svg";

export const DevicesManager = () => {
  return (
    <div className="py-6">
      <div className="max-width w-11/12 mx-auto">
        <div className="flex justify-between mb-6">
          <h4 className="text-[20px]">Devices</h4>
          <div className="">Button</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex justify-start gap-2">
            <div className="">
              <Input type="text" placeholder="batata" />
            </div>
            <div className="">
              <Dropdown />
            </div>
            <div className="">input</div>
          </div>
          refresh
        </div>
        <div className="flex flex-row">list</div>
        <div className="">header</div>
        <div className="">list</div>
      </div>
    </div>
  );
};

export default DevicesManager;
