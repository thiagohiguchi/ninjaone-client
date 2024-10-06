import { React } from "react";
import { LANGUAGES } from "../../../constants/config";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language; // Get the current active language

  const handleChangeLanguage = (newLang) => {
    i18n.changeLanguage(newLang); // Function to switch languages
  };

  return (
    <div className="bg-brand py-3">
      <div className="max-width w-11/12 mx-auto flex justify-center md:justify-end">
        <Dropdown
          position="top-end"
          name={t("changeLanguage")}
          items={LANGUAGES.map((item) => (
            <button onClick={() => handleChangeLanguage(item)} key={item}>
              <span className="">{t(item)}</span>
            </button>
          ))}
          className="btn btn-outline btn-small text-white border-white min-w-48 "
        >
          <div className="flex items-center justify-end gap-2 w-full">
            <span className="">{t(activeLanguage)}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6875 7.71875L8.71875 11.7188C8.5 11.9062 8.25 12 8 12C7.71875 12 7.46875 11.9062 7.28125 11.7188L3.3125 7.71875C3 7.4375 2.90625 7 3.0625 6.625C3.21875 6.25 3.59375 6 4 6H11.9688C12.375 6 12.7188 6.25 12.875 6.625C13.0312 7 12.9688 7.4375 12.6875 7.71875Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Footer;
