"use client"
import React, { useState, useEffect } from "react";
import { Container, Logo } from "./HeaderElements";
import { FaDev } from "react-icons/fa";
import { Navbar } from "@/src/components";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";
import { setIsLocked } from "@/app/GlobalRedux/Features/ScrolllockSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Header = () => {
    const dispatch = useDispatch();

    const [bar, setBar] = useState(false);
    const theme = useSelector(selectTheme);

    useEffect(() => {
        if (bar) {
            dispatch(setIsLocked(true));
        } else {
            dispatch(setIsLocked(false));
        }
    }, [bar, dispatch]);

    return (
        <Container className="container" bar={bar ? 1 : 0} theme={theme}>
            <Logo>
                <span>
                    <FaDev />
                </span>
                <h1>Portfolio</h1>
            </Logo>
            <Navbar bar={bar} />
            <div className="bars" onClick={() => setBar(!bar)}>
                <div className="bar"></div>
            </div>
        </Container>
    );
};
