import React, { useState, useEffect } from "react";
import { Container, Cards } from "./SkillsElements";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
    FaApple,
    FaLinux,
    FaNodeJs,
    FaCcStripe,
    FaDocker,
    FaGithub,
    FaReact,
    FaPhp,
    FaSymfony,
    FaGitlab,
    FaSass,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiMysql,
    SiJavascript,
    SiRedux,
    SiStrapi,
    SiExpress,
    SiTypescript,
    SiJquery,
    SiMongodb,
    SiFirebase,
    SiJest,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GiTechnoHeart } from "react-icons/gi";
import { Card } from "../Card";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { selectCurrentLocale } from "@/app/GlobalRedux/Features/LocaleSlice";
import { Loading } from "@/src/components";
import { DefaultButton } from "@/src/components";
import { skillSorting } from "@/src/tools/SkillSorting";

const iconMappings = {
    BiLogoTailwindCss: BiLogoTailwindCss,
    FaApple: FaApple,
    FaLinux: FaLinux,
    FaNodeJs: FaNodeJs,
    FaCcStripe: FaCcStripe,
    FaDocker: FaDocker,
    FaGithub: FaGithub,
    FaReact: FaReact,
    FaPhp: FaPhp,
    FaSymfony: FaSymfony,
    FaGitlab: FaGitlab,
    FaSass: FaSass,
    FaBootstrap: FaBootstrap,
    SiMysql: SiMysql,
    SiJavascript: SiJavascript,
    SiRedux: SiRedux,
    SiStrapi: SiStrapi,
    SiExpress: SiExpress,
    SiTypescript: SiTypescript,
    SiJquery: SiJquery,
    SiMongodb: SiMongodb,
    SiFirebase: SiFirebase,
    SiJest: SiJest,
    BsGit: BsGit,
    TbBrandNextjs: TbBrandNextjs,
    GiTechnoHeart: GiTechnoHeart,
};

const getSkills = async () => {
    try {
        let apiUrl;

        if (process.env.NODE_ENV === process.env.NEXT_PUBLIC_ENV_PRODUCTION) {
            apiUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;
        } else {
            apiUrl = process.env.NEXT_PUBLIC_LOCAL_URL;
        }

        const response = await axios.get(`${apiUrl}/api/skills`, {
            headers: {
                "Cache-Control": "no-store",
            },
        });

        if (response.status !== 200) {
            throw new Error("Something went wrong while fetching skills data");
        }

        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const Skills = () => {
    const INITIAL_SKILLS_PER_LOAD = 4;

    const { t } = useTranslation();
    const currentLocale = useSelector(selectCurrentLocale);
    const english = "en";
    const [loading, setLoading] = useState(true);
    const [displayedSkills, setDisplayedSkills] = useState([]);
    const [totalSkills, setTotalSkills] = useState([]);
    const [skillsPerPage, setSkillsPerPage] = useState(INITIAL_SKILLS_PER_LOAD);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const { skills } = await getSkills();

                const mainSkills = ["symfony", "next", "react", "php", "javascript", "mongodb", "sql", "redux", "tailwind"];
                skills.sort(skillSorting(mainSkills));

                const initialSkills = skills.slice(0, skillsPerPage);
                setTotalSkills(skills);
                setDisplayedSkills(initialSkills);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const loadMoreSkills = () => {
        const currentDisplayCount = displayedSkills.length;
        const skillsToLoad = totalSkills.slice(
            currentDisplayCount,
            currentDisplayCount + skillsPerPage
        );
        setDisplayedSkills([...displayedSkills, ...skillsToLoad]);
    };

    const loadLessSkills = () => {
        const currentDisplayCount = displayedSkills.length;
        const newDisplayedSkills = displayedSkills.slice(
            0,
            currentDisplayCount - skillsPerPage
        );
        setDisplayedSkills(newDisplayedSkills);
    };

    const getIconComponent = (iconName) => {
        const IconComponent = iconMappings[iconName];
        return IconComponent || GiTechnoHeart;
    };

    return (
        <Container className="container" id="skills">
            <Slide direction="left" triggerOnce>
                <h4>
                    {t("skills.my")}{" "}
                    <span className="skills-title-sup">
                        {t("skills.skills")}
                    </span>
                </h4>
                <h1 className="skills-title">
                    {t("skills.whatImWorkingWith")}
                </h1>
            </Slide>
            {loading ? (
                <Loading />
            ) : (
                <Cards>
                    {displayedSkills.map((skill, index) => (
                        <Slide direction="down" key={index} triggerOnce>
                            <Card
                                Icon={getIconComponent(skill.icon)}
                                title={
                                    currentLocale === english
                                        ? skill.nameEN
                                        : skill.nameFR
                                }
                                description={
                                    currentLocale === english
                                        ? skill.descriptionEN
                                        : skill.descriptionFR
                                }
                                link={skill.link}
                            />
                        </Slide>
                    ))}
                </Cards>
            )}
            <div className="container-skills-buttons">
                {displayedSkills.length > INITIAL_SKILLS_PER_LOAD && (
                    <DefaultButton onClick={loadLessSkills} text={t("global.loadLess")} />
                )}
                {displayedSkills.length < totalSkills.length && (
                    <DefaultButton onClick={loadMoreSkills} text={t("global.loadMore")} />
                )}
            </div>
        </Container>
    );
};

export default Skills;
