import React from "react";
import { Container } from "./ProjectsElements";
import { Background } from "@/src/components/GlobalWrapper/GlobalWrapperElements";
import { SliderComp } from "../Slider";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";

const projectsData = [
    {
        name: "projects.cards.disneyplus.name",
        img: "/assets/project/project-disneyplus.jpg",
        description: "projects.cards.disneyplus.description",
        repoLink: "https://github.com/AxelRaboit/training-disney-plus-clone",
        demoLink: "https://disney-plus-clone-50123.web.app/",
        isAvailable: true,
    },
    {
        name: "projects.cards.amazon.name",
        img: "/assets/project/project-amazon.png",
        description: "projects.cards.amazon.description",
        repoLink: "https://github.com/AxelRaboit/training-amazon-clone",
        demoLink: "https://amazooon-clone-16421.web.app/",
        isAvailable: true,
    },
    {
        name: "projects.cards.project3.name",
        img: "/assets/project/project-no-image.jpg",
        description: "projects.cards.project3.description",
        repoLink: "#",
        demoLink: "#",
        isAvailable: false,
    },
    {
        name: "projects.cards.project4.name",
        img: "/assets/project/project-no-image.jpg",
        description: "projects.cards.project4.description",
        repoLink: "#",
        demoLink: "#",
        isAvailable: false,
    },
    {
        name: "projects.cards.project5.name",
        img: "/assets/project/project-no-image.jpg",
        description: "projects.cards.project5.description",
        repoLink: "#",
        demoLink: "#",
        isAvailable: false,
    },
    {
        name: "projects.cards.project6.name",
        img: "/assets/project/project-no-image.jpg",
        description: "projects.cards.project6.description",
        repoLink: "#",
        demoLink: "#",
        isAvailable: false,
    },
];

export const Projects = () => {
    const { t } = useTranslation();
    const theme = useSelector(selectTheme);

    return (
        <Background theme={theme}>
            <Container className="container" id="projects">
                <Zoom triggerOnce>
                    <h1>
                        {t("projects.title")}{" "}
                        <span className="title">
                            {t("projects.titleComplement")}
                        </span>
                    </h1>
                    <p>{t("projects.description")}</p>
                </Zoom>
                <SliderComp data={projectsData} />
            </Container>
        </Background>
    );
};