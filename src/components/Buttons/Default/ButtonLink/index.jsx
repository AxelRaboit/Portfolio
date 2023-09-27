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
            {
                isDownloadable ? (
                    <a
                        href={link}
                        target={isTarget ? "_blank" : ""}
                        download
                        rel={rel}
                    >
                        {text}
                    </a>
                ) : (
                    <a
                        href={link}
                        target={isTarget ? "_blank" : ""}
                        rel={rel}
                    >
                        {text}
                    </a>
                )
            }
        </Container>
    );
};
