import React, { useRef, useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { DefaultButton } from "@/src/components";

export const Footer = () => {
    const form = useRef();
    const { t } = useTranslation();
    const theme = useSelector(selectTheme);
    const [isValidatedRecaptcha, setIsValidatedRecaptcha] = useState(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const notifySuccess = ({ message }) =>
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme === "dark" ? "dark" : "light",
        });

    const notifyError = ({ message }) =>
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme === "dark" ? "dark" : "light",
        });

    const validateForm = () => {
        const fullname = document.querySelector(
            "#form input[name='user_name']"
        );
        const email = document.querySelector("#form input[name='user_email']");
        const message = document.querySelector(
            "#form textarea[name='message']"
        );

        const regexFullname = new RegExp(
            "^[a-zA-ZÀ-ÿ]{2,40}[- ]{0,1}[a-zA-ZÀ-ÿ]{2,40}$"
        );
        const regexEmail = new RegExp(
            "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
        );
        const regexMessage = new RegExp(
            "^[a-zA-ZÀ-ÿ0-9.,;:!?'\"()@&$€£%*+=s-]{2,500}$"
        );

        let isValid = true;

        if (!regexFullname.test(fullname.value)) {
            isValid = false;
            notifyError({
                message: `${t("messages.form.error.fullname")}`,
            });
        }

        if (!regexEmail.test(email.value)) {
            isValid = false;
            notifyError({
                message: `${t("messages.form.error.email")}`,
            });
        }

        if (!regexMessage.test(message.value)) {
            isValid = false;
            notifyError({
                message: `${t("messages.form.error.message")}`,
            });
        }

        if (!isValidatedRecaptcha) {
            isValid = false;
            notifyError({
                message: `${t("messages.form.error.recaptcha")}`,
            });
        }

        if (isValid) {
            emailjs.sendForm(serviceId, templateId, "#form", userId).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    notifySuccess({
                        message: `${t("messages.form.success")}`,
                    });
                },
                function (error) {
                    console.log("FAILED...", error);
                    notifyError({
                        message: `${t("messages.form.error.globalError")}`,
                    });
                }
            );
        }
    };

    return (
        <>
            <ToastContainer />
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
                    <Form theme={theme}>
                        <Slide direction="right" triggerOnce>
                            <form ref={form} onSubmit={validateForm} id="form">
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
                                <ReCAPTCHA
                                    className="g-recaptcha"
                                    sitekey={recaptchaSiteKey}
                                    theme="light"
                                    onChange={(value) => {
                                        setIsValidatedRecaptcha(!!value);
                                    }}
                                />
                                <DefaultButton
                                    type="submit"
                                    text={t("contact.form.submit")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        validateForm();
                                    }}
                                />
                            </form>
                        </Slide>
                    </Form>
                </Container>
            </Slide>
        </>
    );
};
