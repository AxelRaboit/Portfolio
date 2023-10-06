import React from "react";
import { Container } from "./DefaultButtonLinkElements";
import Link from "next/link";

export const DefaultButtonLink = ({
    color = "primary",
    text,
    link,
    isTarget,
    isDownloadable = false,
    rel = "",
    containerExtraClass = "",
    linkExtraClass = "",
}) => {
    return (
        <Container className={`default-button-link ${containerExtraClass}`} color={color}>
            {
                isDownloadable ? (
                    <Link
                        href={link}
                        target={isTarget ? "_blank" : ""}
                        download
                        rel={rel}
                        linkextraclass={linkExtraClass}
                    >
                        {text}
                    </Link>
                ) : (
                    <Link
                        href={link}
                        target={isTarget ? "_blank" : ""}
                        rel={rel}
                        linkextraclass={linkExtraClass}
                    >
                        {text}
                    </Link>
                )
            }
        </Container>
    );
};
