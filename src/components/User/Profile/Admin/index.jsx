"use client";
import React from "react";
import {} from "./AdminProfileElements";
import {
    clearCurrentUser,
    selectCurrentUser,
} from "@/app/GlobalRedux/Features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";

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
        <div>
            <h1>Admin Profile</h1>
            <h2>
                {currentUser !== null && (
                    <Link href={`/profile/${currentUser._id}`}>
                        {currentUser._id}
                    </Link>
                )}
            </h2>
            <hr />
            <button onClick={logout}>{t("global.logout")}</button>
        </div>
    );
};
