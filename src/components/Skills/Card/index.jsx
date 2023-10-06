import React from "react";
import { Container } from "./CardElements";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";
import { useSelector } from "react-redux";
import { CropText } from "@/src/tools/CropText";
import { useTranslation } from "react-i18next";
import { DefaultButtonLink } from "../../Buttons";

export const Card = ({ Icon, description, title, link }) => {
    const { t } = useTranslation();

    const theme = useSelector(selectTheme);

    return (
        <Container theme={theme}>
            <span className="card-icon">
                <Icon />
            </span>
            <h1>{title}</h1>
            <CropText text={description} limit={110} />
            {link ? (
                <DefaultButtonLink
                    text={t("general.button.knowMore")}
                    link={link}
                    isTarget={true}
                />
            ) : null}
        </Container>
    );
};
