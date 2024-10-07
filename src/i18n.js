import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // Load translations using HTTP


i18n
.use(Backend) // Load translations using the backend (HTTP)
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if user's language is not available
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    backend: {
      loadPath: import.meta.env.VITE_TRANSLATION_BASE_PATH+'/locales/{{lng}}/translation.json' // Path to language files
    },
    // detection: {
    //   order: ['queryString', 'cookie', 'localStorage', 'navigator'],
    //   caches: ['localStorage', 'cookie'],
    // }
  });

export default i18n;
