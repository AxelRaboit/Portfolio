import styled from "styled-components";
import Image from "next/image";

export const ContainerProjectImage = styled.div`
    width: 100%;
    height: 100%;
    `;

export const ProjectImage = styled(Image)`
    position: relative;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
    width: 100%;
    height: 100%;
`;

export const Technologies = styled.div`
    margin: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .tech {
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        border: 1px solid var(--color-white);
        background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-black)"
            : "var(--color-darker-white)"};
        font-size: 0.7rem;
        color: ${(props) =>
        props.theme === "dark" ? "var(--color-white)" : "var(--color-black)"};
    }
`;

export const Container = styled.div`
    height: 20rem;
    background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-gradient-lighter-grey)"
            : "var(--color-white)"};
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: var(--color-white);

    .availability {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-bottom: 1rem;
    }

    .dot {
        position: relative;
        height: 15px;
        width: 15px;
        border-radius: 50%;
    }

    .inner-dot {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background-color: ${(props) =>
            props.availability === 0
                ? "var(--color-red)"
                : "var(--color-green)"};
        filter: ${(props) =>
            props.availability === 0
                ? "drop-shadow(0px 5px 10px #f42300)"
                : "drop-shadow(0px 5px 10px #01be9551)"};
        animation: scintillation 2s ease-in-out infinite;
    }

    @keyframes scintillation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    .content {
        z-index: 3;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -50rem;
        text-align: left;
        padding: 1rem 1rem;
        background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
        transition: all 400ms ease-in-out;

        .description {
            .links {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .demo-link,
                .repo-link {
                    width: 100%;
                }
                .repo-link {
                    margin-bottom: 1rem;
                }
            }
        }

        h1 {
            font-size: 1rem;
            margin: 0;
            padding: 0;
        }

        p {
            width: 90%;
            margin: 0;
            font-size: 0.8rem;

            .link {
                color: var(--color-primary);
            }

            .demo-link {
                margin-left: 0.4rem;
            }
        }
    }

    &:hover > img {
        transform: scale(1.3);
    }

    &:hover > .content {
        bottom: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
