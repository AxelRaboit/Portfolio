import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    z-index: 1;

    @media (max-width: 840px) {
        width: 90%;
    }

    @media (max-width: 940px) {
        flex-direction: column-reverse;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    button:first-child {
        margin: 1rem 1rem 1rem 0;
    }
    
    button:last-child {
        margin: 1rem 0 1rem 0;
    }

    @media (max-width: 940px) {
        width: 100%;
        button {
            width: 100%;
        }

        button:first-child {
            margin: 1rem 0 1rem 0;
        }

        button:last-child {
            margin: 1rem 0 1rem 0;
        }
    }
`;

export const Texts = styled.div`
    flex: 1;

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

    h1 {
        font-size: 2rem;
        letter-spacing: 2px;
        color: var(--color-primary);
    }

    h4 {
        padding: 1rem 0;
        font-weight: 500;
    }

    h3 {
        font-weight: 500;
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    p {
        font-weight: 300;
    }

    span.greetings,
    span.greetings-skills {
        color: var(--color-primary);
    }
`;

export const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        font-size: 0%.9rem;

        @media (max-width: 690px) {
            font-size: 0.7rem;
        }
    }

    .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            width: 2.3rem;
            height: 2rem;
            clip-path: polygon(
                25% 0%,
                75% 0%,
                100% 50%,
                75% 100%,
                25% 100%,
                0% 50%
            );
            background-color: var(--color-primary);
            position: relative;
            transition: transform 400ms ease-in-out;

            &:hover {
                transform: rotate(360deg);
            }
        }

        a {
            color: #fff;
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export const ProfileAvatar = styled(Image)`
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    object-fit: contain;
    width: 350px;
    height: 350px;

    @media (max-width: 790px) {
        width: 20rem;
    }

    @media (max-width: 660px) {
        width: 18rem;
    }

    @media (max-width: 940px) {
        width: 100%;
        height: auto;
    }

    &:hover {
        transform: translateY(-10px);
    }
`;
