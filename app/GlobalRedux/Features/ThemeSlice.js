import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark",
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = ThemeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default ThemeSlice.reducer;