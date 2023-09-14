"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/src/redux/store";

export const LayoutComponent = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

