import React from "react";
import { Container } from "./DefaultButtonLinkElements";
import Link from "next/link";

export const DefaultButtonLink = ({
    text,
    link,
    isTarget,
    isDownloadable = false,
    rel = "",
    containerExtraClass = "",
    linkExtraClass = "",
}) => {
    return (
        <Container className={`default-button-link ${containerExtraClass}`}>
            {
                isDownloadable ? (
                    <Link
                        href={link}
                        target={isTarget ? "_blank" : ""}
                        download
                        rel={rel}
                        linkExtraClass={linkExtraClass}
                    >
                        {text}
                    </Link>
                ) : (
                    <Link
                        href={link}
                        target={isTarget ? "_blank" : ""}
                        rel={rel}
                        linkExtraClass={linkExtraClass}
                    >
                        {text}
                    </Link>
                )
            }
        </Container>
    );
};
