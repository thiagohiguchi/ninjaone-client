import { React } from "react";

export const Select = () => {
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

export default Select;
