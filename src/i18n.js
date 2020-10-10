import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    // Change this to 'en' if default language should be English
    lng: "en",
    fallbackLng: "en",
    debug: false,
    ns: "translation",
    defaultNS: "translation",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
