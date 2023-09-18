"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/src/redux/slices/user/UserSlice";
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
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";

export const LoginComp = () => {
    const router = useRouter();
    const theme = useSelector(selectTheme);
    const { t } = useTranslation();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
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
        }
    };

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/login", user);
            console.log("Login success", response.data);

            await fetchUserData();

            notifySuccess({ message: "Login successful" });
            router.push("/");
        } catch (error) {
            console.log("Login failed", error.message);
            notifyError({ message: error.message });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <Container>
            {/* <h1>{loading ? "Processing" : "Login"}</h1> */}
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
    );
};
