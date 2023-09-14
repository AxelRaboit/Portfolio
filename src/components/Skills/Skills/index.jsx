import React from "react";
import { Container, Cards } from "./SkillsElements";
import { useTranslation } from "react-i18next";
import { FaApple, FaLinux, FaNodeJs, FaCcStripe, FaDocker, FaGithub, FaReact, FaPhp, FaSymfony, FaGitlab, FaSass } from "react-icons/fa";
import { SiMysql, SiJavascript, SiRedux, SiStrapi, SiExpress, SiTypescript, SiJquery } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Card } from "../Card";
import { Slide } from "react-awesome-reveal";

export const Skills = () => {
    const { t } = useTranslation();

    const skillsData = [
        { Icon: FaPhp, titleKey: "skills.cards.php.title", descriptionKey: "skills.cards.php.description", link: "https://www.php.net/" },
        { Icon: FaSymfony, titleKey: "skills.cards.symfony5.title", descriptionKey: "skills.cards.symfony5.description", link: "https://symfony.com/" },
        { Icon: FaReact, titleKey: "skills.cards.reactJs.title", descriptionKey: "skills.cards.reactJs.description", link: "https://reactjs.org/" },
        { Icon: SiJavascript, titleKey: "skills.cards.javascript.title", descriptionKey: "skills.cards.javascript.description", link: "https://www.javascript.com/" },
        { Icon: SiJquery, titleKey: "skills.cards.jquery.title", descriptionKey: "skills.cards.jquery.description", link: "https://jquery.com/" },
        { Icon: SiTypescript, titleKey: "skills.cards.typescript.title", descriptionKey: "skills.cards.typescript.description", link: "https://www.typescriptlang.org/" },
        { Icon: SiRedux, titleKey: "skills.cards.redux.title", descriptionKey: "skills.cards.redux.description", link: "https://redux.js.org/" },
        { Icon: FaGithub, titleKey: "skills.cards.github.title", descriptionKey: "skills.cards.github.description", link: "https://github.com/" },
        { Icon: FaGitlab, titleKey: "skills.cards.gitlab.title", descriptionKey: "skills.cards.gitlab.description", link: "https://gitlab.com/" },
        { Icon: TbBrandNextjs, titleKey: "skills.cards.nextjs.title", descriptionKey: "skills.cards.nextjs.description", link: "https://nextjs.org/" },
        { Icon: FaDocker, titleKey: "skills.cards.docker.title", descriptionKey: "skills.cards.docker.description", link: "https://www.docker.com/" },
        { Icon: FaCcStripe, titleKey: "skills.cards.stripe.title", descriptionKey: "skills.cards.stripe.description", link: "https://stripe.com/" },
        { Icon: SiStrapi, titleKey: "skills.cards.strapi.title", descriptionKey: "skills.cards.strapi.description", link: "https://strapi.io/" },
        { Icon: FaNodeJs, titleKey: "skills.cards.nodejs.title", descriptionKey: "skills.cards.nodejs.description", link: "https://nodejs.org/en/" },
        { Icon: SiExpress, titleKey: "skills.cards.expressjs.title", descriptionKey: "skills.cards.expressjs.description", link: "https://expressjs.com/" },
        { Icon: FaLinux, titleKey: "skills.cards.linux.title", descriptionKey: "skills.cards.linux.description", link: "https://fr.wikipedia.org/wiki/Linux" },
        { Icon: FaApple, titleKey: "skills.cards.apple.title", descriptionKey: "skills.cards.apple.description", link: "https://fr.wikipedia.org/wiki/MacOS" },
        { Icon: SiMysql, titleKey: "skills.cards.mysql.title", descriptionKey: "skills.cards.mysql.description", link: "https://www.mysql.com/" },
        { Icon: FaSass,  titleKey: "skills.cards.sass.title", descriptionKey: "skills.cards.sass.description", link: "https://sass-lang.com/" },
    ];

    return (
        <Container className="container" id="skills">
            <Slide direction="left" triggerOnce>
                <h4>
                    {t("skills.my")} <span className="skills-title-sup">{t("skills.skills")}</span>
                </h4>
                <h1 className="skills-title">{t("skills.whatImWorkingWith")}</h1>
            </Slide>
            <Cards>
                {skillsData.map((skill, index) => (
                    <Slide direction="up" key={index} triggerOnce>
                        <Card
                            Icon={skill.Icon}
                            title={t(skill.titleKey)}
                            description={t(skill.descriptionKey)}
                            link={skill.link}
                        />
                    </Slide>
                ))}
            </Cards>
        </Container>
    );
};
