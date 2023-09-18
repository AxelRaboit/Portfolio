import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        userInformation: null,
        isLoggedIn: false,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.userInformation = action.payload;
            state.isLoggedIn = true;
        },
        clearCurrentUser: (state) => {
            state.userInformation = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setCurrentUser, clearCurrentUser } = UserSlice.actions;

export const selectCurrentUser = (state) => state.user.userInformation;
export const selectUserIsLoggedIn = (state) => state.user.isLoggedIn;

export default UserSlice.reducer;