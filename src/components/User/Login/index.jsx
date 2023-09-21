"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/app/GlobalRedux/Features/UserSlice";
import { DefaultButton, VariantButtonLink } from "@/src/components";
import { useTranslation } from "react-i18next";
import {
    Container,
    FormContainer,
    FormLabel,
    FormInput,
    ContainerCTA,
    ContainerFormInput,
} from "./LoginElements";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";

export const LoginComp = () => {
    const router = useRouter();
    const theme = useSelector(selectTheme);
    const { t } = useTranslation();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

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

    const fetchUserData = async () => {
        try {
            const res = await axios.get("/api/me");
            console.log("res.data.data", res.data.data);

            dispatch(setCurrentUser(res.data.data));
        } catch (error) {
            console.log("Error while fetching user data", error.message);

            notifyError({
                message: `${t("messages.loginForm.error.fetching")}`,
            });
        }
    };

    const onLogin = async () => {
        try {
            let isValid = true;

            if (!user.email) {
                isValid = false;
                notifyError({
                    message: `${t("messages.loginForm.error.email")}`,
                });
            }

            if (!user.password) {
                isValid = false;
                notifyError({
                    message: `${t("messages.loginForm.error.password")}`,
                });
            }

            if (isValid) {
                setLoading(true);
                await axios.post("/api/login", user);
                await fetchUserData();

                notifySuccess({ message: t("messages.loginForm.success") });
                router.push("/");
            }
        } catch (error) {
            notifyError({
                message: `${t("messages.loginForm.error.notFound")}`,
            });
            console.log("Error while logging in", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <Container>
                <FormContainer theme={theme}>
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
                            text={t("global.login")}
                            onClick={onLogin}
                        />
                        <VariantButtonLink
                            text={t("global.signup")}
                            link="/signup"
                            isTarget={false}
                        />
                    </ContainerCTA>
                </FormContainer>
            </Container>
        </>
    );
};
