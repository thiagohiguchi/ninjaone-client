import { React } from "react";
// import logo from "../../assets/logos/NinjaOneLogo.svg";

export const Dropdown = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Pick your favorite Simpson
      </option>
      <option>Homer</option>
      <option>Marge</option>
      <option>Bart</option>
      <option>Lisa</option>
      <option>Maggie</option>
    </select>
  );
};

export default Dropdown;
