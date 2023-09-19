import React from "react";
import { Header } from "@/src/components";
import {
    GlobalStyle,
    Container,
    Background,
} from "./GlobalWrapperElements";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";
import { selectScrollIsLocked } from "@/app/GlobalRedux/Features/ScrolllockSlice";
import { Footer } from "@/src/components";

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
            <Background theme={theme}>
                <Footer />
            </Background>
        </Container>
    );
};
