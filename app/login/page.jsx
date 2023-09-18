"use client";
import React from "react";
import { LoginComp } from "@/src/components";
import { GlobalWrapperNoFooter } from "@/src/components";

const Login = () => {
    return (
        <GlobalWrapperNoFooter>
            <LoginComp />
        </GlobalWrapperNoFooter>
    );
}

export default Login;