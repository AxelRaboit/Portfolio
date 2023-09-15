"use client";
import { GlobalWrapper } from "@/src/components";
import translationEN from "@/src/translation/en.json";
import translationFR from "@/src/translation/fr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "@/src/redux/store";
import { Home } from "@/src/components";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        fr: {
            translation: translationFR,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default function Page() {
    let persistor = persistStore(store);

    return (
        <PersistGate loading={null} persistor={persistor}>
            <main>
                <GlobalWrapper>
                    <Home />
                </GlobalWrapper>
            </main>
        </PersistGate>
    );
}
