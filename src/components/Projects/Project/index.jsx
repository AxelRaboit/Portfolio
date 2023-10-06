import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";
import { useTranslation } from "react-i18next";
import { CropText } from "@/src/tools/CropText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, ProjectImage } from "./ProjectElements";
import { selectCurrentLocale } from "@/app/GlobalRedux/Features/LocaleSlice";
import { DefaultButtonLink } from "@/src/components";

export const Project = ({
    nameFR,
    nameEN,
    img,
    descriptionFR,
    descriptionEN,
    repoLink,
    demoLink,
    isAvailable,
}) => {
    const theme = useSelector(selectTheme);
    const { t } = useTranslation();
    const currentLocale = useSelector(selectCurrentLocale);
    const english = "en";
    const defaultImg = "/assets/project/project-no-image.png";

    return (
        <Container
            className="project"
            theme={theme}
            availability={isAvailable ? 1 : 0}
        >
            <ProjectImage
                src={img ? img : defaultImg}
                alt="project"
                loading="eager"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
            />
            <div className="content">
                <h1>{currentLocale === english ? nameEN : nameFR}</h1>
                <div className="availability">
                    <div className="dot">
                        <div className="inner-dot"></div>
                    </div>
                    <p className="availability">
                        {isAvailable
                            ? t("projects.cards.available")
                            : t("projects.cards.unavailable")}
                    </p>
                </div>
                <div className="description">
                    <CropText
                        text={
                            currentLocale === english
                                ? descriptionEN
                                : descriptionFR
                        }
                        limit={200}
                    />
                    {repoLink || demoLink ? (
                        <div className="links">
                            {repoLink ? (
                                <DefaultButtonLink
                                    text={t("projects.cards.repositoryLink")}
                                    link={repoLink}
                                    isTarget={true}
                                    containerExtraClass="repo-link"
                                />
                            ) : null}
                            {demoLink ? (
                                <DefaultButtonLink
                                    text={t("projects.cards.demoLink")}
                                    link={demoLink}
                                    isTarget={true}
                                    containerExtraClass="demo-link"
                                />
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </Container>
    );
};
