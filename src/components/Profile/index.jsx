"use client"
import React, { useState } from "react";
import { Container, Texts, Social, ProfileAvatar } from "./ProfileElements";
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillGitlab,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { DefaultButton } from "@/src/components/Buttons/Default";

export const Profile = () => {
    const { t } = useTranslation();

    const [availability, setAvailability] = useState(false);

    return (
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
                        <p>{availability ? t("profile.availability.yes") : t("profile.availability.no")}</p>
                    </div>

                    <h3>
                        {t("profile.webDeveloper")}{" "}
                        <span className="greetings-skills">PHP / Symfony</span> &{" "}
                        <span className="greetings-skills">
                            JavaScript / React JS
                        </span>
                    </h3>
                    <p>{t("profile.presentation")} </p>
                    <div className="container-profile-cta">
                        <DefaultButton text={t("profile.cta")} link="#footer" isTarget={false} />
                    </div>
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
                    src="assets/profile/profile-avatar.png"
                    alt="profile avatar"
                />
            </Slide>
        </Container>
    );
};

