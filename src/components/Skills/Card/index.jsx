import React from "react";
import { Container } from "./CardElements";
import {
    selectTheme,
} from "@/src/redux/slices/theme/ThemeSlice";
import { useSelector } from "react-redux";
import { CropText } from "@/src/tools/CropText";
import { useTranslation } from "react-i18next";

export const Card = (props) => {

    const { t } = useTranslation();

    const theme = useSelector(selectTheme);
    const { Icon, description, title, link } = props;

    return (
        <Container theme={theme}>
            <span className="card-icon">
                <Icon />
            </span>
            <h1>{title}</h1>
            <CropText text={description} limit={110} />
            <a target="_blank" href={link}>
                <button>
                    {t("general.button.knowMore")}
                </button>
            </a>
        </Container>
    );
};
