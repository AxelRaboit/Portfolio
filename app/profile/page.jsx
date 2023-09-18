"use client";
import { AdminProfile, UserProfile } from "@/src/components";
import { selectCurrentUser } from "@/src/redux/slices/user/UserSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Profile = () => {
    const router = useRouter();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        if (!currentUser) {
            router.push("/");
        }
    }, [router]);

    return (
        <>
            {currentUser && currentUser?.isAdmin ? (
                <AdminProfile />
            ) : (
                <UserProfile />
            )}
        </>
    );
};

export default Profile;