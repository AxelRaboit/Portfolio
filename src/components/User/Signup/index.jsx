import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { DefaultButton, VariantButtonLink } from "@/src/components";
import { useTranslation } from "react-i18next";
import {
    Container,
    FormContainer,
    FormLabel,
    FormInput,
    ContainerCTA,
    ContainerFormInput,
} from "./SignupElements";

export const SignupComp = () => {
    const router = useRouter();
    const theme = useSelector(selectTheme);
    const { t } = useTranslation();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        fullname: "",
    });
    const [loading, setLoading] = React.useState(false);

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

    const validateName = () => {
        const regexName = /^[a-zA-ZÀ-ÿ]{2,40}[- ]{0,1}[a-zA-ZÀ-ÿ]{2,40}$/;
        return regexName.test(user.fullname);
    };

    const validateEmail = () => {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regexEmail.test(user.email);
    };

    const validatePassword = () => {
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regexPassword.test(user.password);
    };

    const onSignup = async () => {
        let isValid = true;

        try {
            setLoading(true);

            if (!validateName()) {
                isValid = false;
                notifyError({
                    message: `${t("messages.signupForm.error.fullname")}`,
                });
            }

            if (!validateEmail()) {
                isValid = false;
                notifyError({
                    message: `${t("messages.signupForm.error.email")}`,
                });
            }

            if (!validatePassword()) {
                isValid = false;
                notifyError({
                    message: `${t("messages.signupForm.error.password")}`,
                });
            }

            if (isValid) {
                const response = await axios.post("/api/signup", user);
                notifySuccess({
                    message: `${t("messages.signupForm.success")}`,
                });
                router.push("/login");
            }
        } catch (error) {
            notifyError({ message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <Container>
                <FormContainer theme={theme}>
                    <FormLabel htmlFor="fullname">Full Name</FormLabel>
                    <ContainerFormInput>
                        <FormInput
                            id="fullname"
                            type="text"
                            value={user.fullname}
                            onChange={(e) =>
                                setUser({ ...user, fullname: e.target.value })
                            }
                            placeholder="Full Name"
                        />
                    </ContainerFormInput>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <ContainerFormInput>
                        <FormInput
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            placeholder="Email"
                        />
                    </ContainerFormInput>

                    <FormLabel htmlFor="password">Password</FormLabel>
                    <ContainerFormInput>
                        <FormInput
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                            placeholder="Password"
                        />
                    </ContainerFormInput>
                    <ContainerCTA>
                        <DefaultButton
                            text={t("global.signup")}
                            onClick={(e) => {
                                e.preventDefault();
                                onSignup();
                            }}
                        />
                        <VariantButtonLink
                            text={t("global.login")}
                            link="/login"
                            isTarget={false}
                        />
                    </ContainerCTA>
                </FormContainer>
            </Container>
        </>
    );
};
