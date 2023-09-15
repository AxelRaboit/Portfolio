import React, { useRef } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillGitlab,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";
import { Container, Profile, Form } from "./FooterElements";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const form = useRef();
    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        /* emailjs
            .sendForm(
                "service_9blub4n",
                "template_uet5a6g",
                "#form",
                "_ZEVAh29BWNeGORjY"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            ); */
    };

    return (
        <Slide direction="left" delay={1} triggerOnce>
            <Container id="footer">
                <Profile>
                    <h1>Portfolio</h1>
                    <div className="address">
                        <h1>{t("contact.address")} : </h1>
                        <p>16 rue Jean Jaurès 51530 Pierry</p>
                    </div>
                    <div className="links">
                        <h1>{t("contact.contactMe")} : </h1>
                        <div>
                            <span>
                                <FiPhoneCall />
                            </span>
                            <a href="tel:+33698357147">+33 6 98 35 71 47</a>
                        </div>
                        <div>
                            <span>
                                <HiOutlineMailOpen />
                            </span>
                            <a href="mailto:axel.raboit@gmail.com">
                                axel.raboit@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="profiles">
                        <h1>{t("contact.checkMyMedia")}</h1>
                        <div className="icons">
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
                    </div>
                </Profile>
                <Form>
                    <Slide direction="right" triggerOnce>
                        <form ref={form} onSubmit={sendEmail} id="form">
                            <div className="name">
                                <span>
                                    <CgProfile />
                                </span>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder={`${t(
                                        "contact.form.fullname"
                                    )}...`}
                                />
                            </div>
                            <div className="email">
                                <span>
                                    <MdAlternateEmail />
                                </span>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder={`${t(
                                        "contact.form.email"
                                    )}...`}
                                />
                            </div>
                            <div className="message">
                                <span className="messageIcon">
                                    <FiMail />
                                </span>
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="10"
                                    placeholder={`${t(
                                        "contact.form.message"
                                    )}...`}
                                ></textarea>
                            </div>
                            <div className="container-submit">
                                <button type="submit">
                                    {t("contact.form.submit")}
                                </button>
                            </div>
                        </form>
                    </Slide>
                </Form>
            </Container>
        </Slide>
    );
};
