import React from "react";
import { Container } from "./Card/CardElements";
import {
    selectTheme,
} from "@/app/GlobalRedux/Features/ThemeSlice";
import { useSelector } from "react-redux";
import CropText from "../../tools/CropText";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Card = (props) => {

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
            <Link target="_blank" href={link}>
                <button>
                    {t("general.button.knowMore")}
                </button>
            </Link>
        </Container>
    );
};

export default Card;
