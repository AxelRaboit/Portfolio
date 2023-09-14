"use client"
import React from "react";
import { GlobalWrapper, DefaultButton, DynamicCv } from "@/src/components";
import { Container } from "./CVElements";
import { useTranslation } from "react-i18next";
import { Background } from "@/src/components/GlobalWrapper/GlobalWrapperElements";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import translationEN from "@/src/translation/en.json";
import translationFR from "@/src/translation/fr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

const CvComponent = () => {
    const theme = useSelector(selectTheme);

    const { t } = useTranslation();

    return (
        <GlobalWrapper>
            <Background theme={theme}>
                <Container className="container">
                    <DefaultButton text={t("cv.download")} link="#" />
                    <p className="download-information">{t("cv.downloadComplement")}</p>
                    <DynamicCv />
                </Container>
            </Background>
        </GlobalWrapper>
    );
};

export default CvComponent;
