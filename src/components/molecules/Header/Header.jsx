import { React } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/logos/NinjaOneLogo.svg";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-brand py-3">
      <div className="max-width w-11/12 mx-auto">
        <div className="flex items-start">
          <figure>
            <img src={logo} alt={t("logo") + " " + t("ninjaOne")} />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
