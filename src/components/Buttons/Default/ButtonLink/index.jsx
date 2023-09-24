import React from "react";
import { Container } from "./DefaultButtonLinkElements";

export const DefaultButtonLink = ({
    text,
    link,
    isTarget,
    isDownloadable = false,
    rel = "",
}) => {
    return (
        <Container className="default-button-link">
            <a
                href={link}
                target={isTarget && !isDownloadable ? "_blank" : ""}
                rel={rel}
                download={isDownloadable ? isDownloadable : ""}
            >
                {text}
            </a>
        </Container>
    );
};
