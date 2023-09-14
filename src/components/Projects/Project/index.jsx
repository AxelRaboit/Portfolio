import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { useTranslation } from "react-i18next";
import { CropText } from "@/src/tools/CropText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./ProjectElements";

export const Project = (props) => {
    const theme = useSelector(selectTheme);
    const { t } = useTranslation();
    const { name, img, description, repoLink, demoLink, isAvailable } =
        props.data;

    return (
        <Container
            className="project"
            theme={theme}
            availability={isAvailable ? 1 : 0}
        >
            <img src={img} alt="project" />
            <div className="content">
                <h1>{t(`${name}`)}</h1>
                <div className="availability">
                    <div className="dot">
                        <div className="inner-dot"></div>
                    </div>
                    <p className="availability">
                        {isAvailable
                            ? t("projects.cards.available")
                            : t("projects.cards.notAvailable")}
                    </p>
                </div>
                <div className="description">
                    <CropText text={t(`${description}`)} limit={100} />
                    {isAvailable && (
                        <div>
                            <a
                                target="_blank"
                                className="link repo-link"
                                href={repoLink}
                            >
                                {t("projects.cards.repositoryLink")}
                            </a>
                            <a
                                target="_blank"
                                className="link demo-link"
                                href={demoLink}
                            >
                                {t("projects.cards.demoLink")}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};
