import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/src/translation/en.json";
import translationFR from "@/src/translation/fr.json";


export const initi18n = () => {

    const english = "en";

    return i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: translationEN,
            },
            fr: {
                translation: translationFR,
            },
        },
        lng: english,
        fallbackLng: english,
        interpolation: {
            escapeValue: false,
        },
    });
};
