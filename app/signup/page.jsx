"use client";
import React from "react";
import { SignupComp } from "@/src/components";
import { GlobalWrapperNoFooter } from "@/src/components";

const Signup = () => {
    return (
        <GlobalWrapperNoFooter>
            <SignupComp />
        </GlobalWrapperNoFooter>
    );
}

export default Signup;