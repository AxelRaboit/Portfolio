"use client";
import { LoginComp } from "@/src/components";
import { GlobalWrapperNoFooter } from "@/src/components";
import { initi18n } from "@/src/tools/initi18n";

const Login = () => {

    initi18n();

    return (
        <GlobalWrapperNoFooter>
            <LoginComp />
        </GlobalWrapperNoFooter>
    );
}

export default Login;