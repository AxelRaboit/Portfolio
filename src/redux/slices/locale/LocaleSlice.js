import { createSlice } from "@reduxjs/toolkit";

export const localeSlice = createSlice({
    name: "locale",
    initialState: {
        currentLocale: "en",
    },
    reducers: {
        setLocale: (state, action) => {
            state.currentLocale = action.payload;
        },
    },
});

export const { setLocale } = localeSlice.actions;

export const selectCurrentLocale = (state) => state.locale.currentLocale;

export default localeSlice.reducer;