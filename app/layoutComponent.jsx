"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const LayoutComponent = ({ children }) => {

    let persistor = persistStore(store);

    return (
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>{children}</Provider>
        </PersistGate>
    );
};

