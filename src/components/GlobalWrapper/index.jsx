import React from "react";
import { Header } from "../Header";
import {
    GlobalStyle,
    Container,
    Banner,
    Background,
} from "./GlobalWrapperElements";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { selectScrollIsLocked } from "@/src/redux/slices/scrolllock/ScrolllockSlice";

export const GlobalWrapper = ({ children }) => {
    const theme = useSelector(selectTheme);
    const scrollIsLocked = useSelector(selectScrollIsLocked);

    return (
        <Container>
            <GlobalStyle
                theme={theme}
                scrollIsLocked={scrollIsLocked ? 1 : 0}
            />
            <Background theme={theme}>
                <Header />
            </Background>
            {children}
        </Container>
    );
};
