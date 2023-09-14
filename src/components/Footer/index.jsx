import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
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
    const { t } = useTranslation();

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
                            <a href="tel:+4733378901">+33 6 98 35 71 47</a>
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
                                <a href="/">
                                    <FaLinkedinIn />
                                </a>
                            </span>
                            <span>
                                <a href="/">
                                    <AiOutlineGithub />
                                </a>
                            </span>
                            <span>
                                <a href="/">
                                    <AiFillGitlab />
                                </a>
                            </span>
                            <span>
                                <a href="/">
                                    <AiOutlineInstagram />
                                </a>
                            </span>
                        </div>
                    </div>
                </Profile>
                <Form>
                    <Slide direction="right" triggerOnce>
                        <form>
                            <div className="name">
                                <span>
                                    <CgProfile />
                                </span>
                                <input
                                    type="text"
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
                                    cols="30"
                                    rows="10"
                                    placeholder={`${t(
                                        "contact.form.message"
                                    )}...`}
                                ></textarea>
                            </div>
                            <button>{t("contact.form.submit")}</button>
                        </form>
                    </Slide>
                </Form>
            </Container>
        </Slide>
    );
};
