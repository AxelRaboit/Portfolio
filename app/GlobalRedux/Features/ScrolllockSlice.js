import { createSlice } from "@reduxjs/toolkit";

export const ScrolllockSlice = createSlice({
    name: "scrolllock",
    initialState: {
        isLocked: false,
    },
    reducers: {
        setIsLocked: (state, action) => {
            state.isLocked = action.payload;
        },
    },
});

export const { setIsLocked } = ScrolllockSlice.actions;

export const selectScrollIsLocked = (state) => state.scrolllock.isLocked;

export default ScrolllockSlice.reducer;