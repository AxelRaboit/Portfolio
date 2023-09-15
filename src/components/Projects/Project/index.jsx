import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { useTranslation } from "react-i18next";
import { CropText } from "@/src/tools/CropText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./ProjectElements";
import { selectCurrentLocale } from "@/src/redux/slices/locale/LocaleSlice";

export const Project = (props) => {
    const theme = useSelector(selectTheme);
    const { t } = useTranslation();
    const currentLocale = useSelector(selectCurrentLocale);
    const english = "en";
    const defaultImg = "/assets/project/project-no-image.png";
    const {
        nameFR,
        nameEN,
        img,
        descriptionFR,
        descriptionEN,
        repoLink,
        demoLink,
        isAvailable,
    } = props.data;

    return (
        <Container
            className="project"
            theme={theme}
            availability={isAvailable ? 1 : 0}
        >
            <img src={img ? img : defaultImg} alt="project" />
            <div className="content">
                <h1>{currentLocale === english ? nameEN : nameFR}</h1>
                <div className="availability">
                    <div className="dot">
                        <div className="inner-dot"></div>
                    </div>
                    <p className="availability">
                        {isAvailable
                            ? t("global.available")
                            : t("global.unavailable")}
                    </p>
                </div>
                <div className="description">
                    <CropText
                        text={
                            currentLocale === english
                                ? descriptionEN
                                : descriptionFR
                        }
                        limit={100}
                    />
                    {repoLink || demoLink ? (
                        <div className="links">
                            {repoLink ? (
                                <a
                                target="_blank"
                                className="link repo-link"
                                href={repoLink}
                            >
                                {t("projects.cards.repositoryLink")}
                            </a>
                            ) : null}
                            {demoLink ? (
                                <a
                                target="_blank"
                                className="link demo-link"
                                href={demoLink}
                            >
                                {t("projects.cards.demoLink")}
                            </a>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </Container>
    );
};
