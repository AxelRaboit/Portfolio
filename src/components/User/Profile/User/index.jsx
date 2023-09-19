"use client"
import React from 'react';
import {} from './UserProfileElements';
import { clearCurrentUser, selectCurrentUser } from "@/app/GlobalRedux/Features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const UserProfile = () => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const { t } = useTranslation();

  const logout = async () => {
    try {
        await axios.get("/api/logout");
        dispatch(clearCurrentUser());
        toast.success("Logout successful");
        router.push("/");
    } catch (error) {
        toast.error(error.message);
    }
};

  return (
    <div>
        <h1>Profile</h1>
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
  )
}
