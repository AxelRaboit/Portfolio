import React from "react";
import { Header } from "@/src/components";
import {
    GlobalStyle,
    Container,
    Background,
} from "./GlobalWrapperGlobalWrapperNoFooterElements";
import { useSelector } from "react-redux";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { selectScrollIsLocked } from "@/src/redux/slices/scrolllock/ScrolllockSlice";

export const GlobalWrapperNoFooter = ({ children }) => {
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
