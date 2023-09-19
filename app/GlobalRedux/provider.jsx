"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export function Providers({ children }) {
    let persistor = persistStore(store);

    return (
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>{children}</Provider>
        </PersistGate>
    );
}
