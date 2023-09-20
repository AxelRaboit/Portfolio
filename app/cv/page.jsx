import React from "react";
import CvComponent from "./cvComponent";

export const metadata = {
    title: {
        default: "Curriculum Vitae",
    },
    description: "Curriculum Vitae du portfolio de Axel",
    keywords: "cv, curriculum vitae, resume",
}

const cv = () => {
    return (
        <CvComponent />
    );
};

export default cv;
