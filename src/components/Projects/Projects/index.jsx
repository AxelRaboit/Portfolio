import React, { useState, useEffect } from "react";
import { Container } from "./ProjectsElements";
import { Background } from "@/src/components/GlobalWrapper/GlobalWrapperElements";
import { SliderComp } from "../Slider";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";

const getProjects = async () => {
    try {
        let apiUrl;

        if (process.env.NODE_ENV === process.env.NEXT_PUBLIC_ENV_PRODUCTION) {
            apiUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;
        } else {
            apiUrl = process.env.NEXT_PUBLIC_LOCAL_URL;
        }

        const res = await fetch(`${apiUrl}/api/projects`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(
                "Something went wrong while fetching projects data"
            );
        }

        return res.json();
    } catch (error) {
        console.error(error);
    }
};

export const Projects = () => {
    const { t } = useTranslation();
    const theme = useSelector(selectTheme);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { projects } = await getProjects();
                setProjects(projects);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, []);

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
                <SliderComp data={projects} />
            </Container>
        </Background>
    );
};
