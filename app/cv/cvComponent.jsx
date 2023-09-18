"use client"
import React from "react";
import { GlobalWrapper, DefaultButton, DynamicCv } from "@/src/components";
import { Container } from "./CVElements";
import { useTranslation } from "react-i18next";

const CvComponent = () => {
    const { t } = useTranslation();

    return (
        <GlobalWrapper>
            <Container className="container">
                <DefaultButton text={t("cv.download")} link="#" />
                <p className="download-information">{t("cv.downloadComplement")}</p>
                <DynamicCv />
            </Container>
        </GlobalWrapper>
    );
};

export default CvComponent;
