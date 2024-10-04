import { React } from "react";
import logo from "../../assets/logos/NinjaOneLogo.svg";

export const Navbar = () => {
  return (
    <div className="bg-brand py-3">
      <div className="max-width w-11/12 mx-auto">
        <div className="flex items-start">
          <figure>
            <img src={logo} alt="NinjaOne" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
