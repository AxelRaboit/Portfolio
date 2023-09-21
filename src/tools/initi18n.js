import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/src/translation/en.json";
import translationFR from "@/src/translation/fr.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        fr: {
            translation: translationFR,
        },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export const i18nConfiguration = i18n;