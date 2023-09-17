"use client";
import { AdminProfile, UserProfile } from "@/src/components";
import { selectCurrentUser } from "@/src/redux/slices/user/UserSlice";
import { useSelector } from "react-redux";


const Profile = () => {

    const currentUser = useSelector(selectCurrentUser);

    return (
        <>
            {currentUser?.isAdmin ? (
                <AdminProfile />
            ) : (
                <UserProfile />
            )}
        </>
    );
};

export default Profile;
