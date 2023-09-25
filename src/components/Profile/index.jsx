"use client";
import React from "react";
import {
    Container,
    Texts,
    Social,
    ProfileAvatar,
    PreviousJobImage,
    ContainerButtons,
    AboutMe,
} from "./ProfileElements";
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillGitlab,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { DefaultButtonLink } from "@/src/components";

export const Profile = () => {
    const { t } = useTranslation();

    const availability =
        process.env.NEXT_PUBLIC_AVAILABLE_FOR_JOB === "true" ? true : false;

    const cvPdf = process.env.NEXT_PUBLIC_CV_PDF_LINK;

    return (
        <>
            <Container className="container">
                <Slide direction="left" triggerOnce>
                    <Texts availability={availability ? 1 : 0}>
                        <h4>
                            {t("profile.hello")}{" "}
                            <span className="greetings">{t("profile.im")}</span>
                        </h4>

                        <h1>Axel Raboit</h1>

                        <div className="availability">
                            <div className="dot">
                                <div className="inner-dot"></div>
                            </div>
                            <p>
                                {availability
                                    ? t("profile.availability.yes")
                                    : t("profile.availability.no")}
                            </p>
                        </div>

                        <h3>
                            {t("profile.webDeveloper")}{" "}
                            <span className="greetings-skills">
                                PHP / Symfony
                            </span>{" "}
                            &{" "}
                            <span className="greetings-skills">
                                JavaScript / React JS
                            </span>
                        </h3>
                        <ContainerButtons>
                            <DefaultButtonLink
                                text={t("cv.downloadFromLinkedin")}
                                link={cvPdf}
                                isTarget={true}
                            />
                            <DefaultButtonLink
                                text={t("cv.downloadFromWebsite")}
                                link="/assets/cv/cv_axel_raboit.pdf"
                                isTarget={true}
                                isDownloadable={true}
                            />
                        </ContainerButtons>
                        <p>{t("profile.presentation")}</p>
                        <ContainerButtons>
                            <DefaultButtonLink
                                text={t("profile.cta")}
                                link="#contact"
                                isTarget={false}
                            />
                        </ContainerButtons>
                        <Social>
                            <p>{t("profile.checkOut")}</p>
                            <div className="social-icons">
                                <span>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/axel-raboit/"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </span>
                                <span>
                                    <a
                                        target="_blank"
                                        href="https://github.com/AxelRaboit"
                                    >
                                        <AiOutlineGithub />
                                    </a>
                                </span>
                                <span>
                                    <a
                                        target="_blank"
                                        href="https://gitlab.com/axel.raboit"
                                    >
                                        <AiFillGitlab />
                                    </a>
                                </span>
                                <span>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/axelr_7/"
                                    >
                                        <AiOutlineInstagram />
                                    </a>
                                </span>
                            </div>
                        </Social>
                    </Texts>
                </Slide>
                <Slide direction="right" triggerOnce>
                    <ProfileAvatar
                        loading="eager"
                        width={350}
                        height={350}
                        priority={true}
                        src="/assets/profile/profile-avatar.png"
                        alt="profile avatar"
                    />
                </Slide>
            </Container>
            <Container className="container">
                <Slide direction="left" triggerOnce>
                    <AboutMe>
                        <h1>{t("profile.aboutMe.title")}</h1>
                        <p>{t("profile.aboutMe.description")}</p>
                        <div className="container-previous-job-image">
                            <PreviousJobImage
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="previous job with truck"
                                src="/assets/profile/previous_job.jpg"
                            />
                            <PreviousJobImage
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="previous job with truck on the road 66"
                                src="/assets/profile/previous_job_66.jpg"
                            />
                        </div>
                    </AboutMe>
                </Slide>
            </Container>
        </>
    );
};
