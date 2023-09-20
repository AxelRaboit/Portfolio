"use client";
import React from "react";
import { Container, Linkk, ContainerLinks, Title, LogoutLink } from "./AdminProfileElements";
import {
    clearCurrentUser,
    selectCurrentUser,
} from "@/app/GlobalRedux/Features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";
import { DefaultButtonLink, DefaultButton } from "@/src/components/Buttons";
import { GlobalWrapperNoFooter } from "@/src/components";
import Link from "next/link";

export const AdminProfile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const { t } = useTranslation();
    const theme = useSelector(selectTheme);

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

    const logout = async () => {
        try {
            await axios.get("/api/logout");
            dispatch(clearCurrentUser());
            notifySuccess({ message: "Logout success" });
            router.push("/");
        } catch (error) {
            notifyError({ message: error.message });
        }
    };

    return (
        <GlobalWrapperNoFooter>
            <Container className="container">
                <Title>Admin Profile</Title>

                <ContainerLinks>
                    {currentUser !== null && (
                        <Linkk href={`/profile/${currentUser._id}`}>
                            {t("Mon profile")}
                        </Linkk>
                    )}

                    <Linkk href="/">{t("Liste des utilisateurs")}</Linkk>
                    <Linkk href="/">{t("Liste des projets")}</Linkk>
                    <Linkk href="/">{t("Liste des témignages")}</Linkk>
                    <Linkk href="/">{t("Liste des compétences")}</Linkk>
                    <LogoutLink href="#" onClick={logout}>
                        {t("global.logout")}
                    </LogoutLink>
                </ContainerLinks>
            </Container>
        </GlobalWrapperNoFooter>
    );
};
