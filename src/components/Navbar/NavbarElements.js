import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
    display: flex;
    align-items: center;

    .theme-icon {
        margin-left: 1rem;
        font-size: 1.5rem;
        cursor: pointer;

        color: var(--color-light);
        color: ${(props) =>
            props.theme === "dark"
                ? "var(--color-yellow)"
                : "var(--color-dark)"};
        filter: ${(props) =>
            props.theme === "dark" ? "drop-shadow(0px 2px 7px #FFD700)" : ""};

        @media screen and (max-width: 1200px) {
            filter: unset;
            color: var(--color-light);
        }
    }

    .container-profile-account {
        color: var(--color-primary);
        padding: 0.5rem;

        filter: var(--drop-shadow-green);
        cursor: pointer;

        &:hover {
            filter: var(--drop-shadow-green-darker);
            animation: none;
        }

        @media screen and (max-width: 1200px) {
            color: var(--color-light);

            .user-icon {
                display: none;
            }
        }

        .user-fullname {
            margin-left: 0.5rem;
        }
    }

    a.navbar-link {
        margin-left: 1rem;
        color: ${(props) =>
            props.theme === "dark"
                ? "var(--color-light)"
                : "var(--color-dark)"};
        color: var(--color-light);
        text-decoration: none;
        font-size: 400;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: var(--color-primary);
            transform: scale(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
        }
        &:hover:before {
            transform: scale(1);
            transform-origin: left;
        }
        &:hover {
            opacity: 0.7;
        }

        @media screen and (max-width: 768px) {
            color: var(--color-light);
        }
    }

    @media screen and (max-width: 1200px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: var(--color-primary);
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${(props) => (props.bar === 1 ? "100vh" : 0)};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 99;
    }
`;

export const NavLink = styled(Link)`
    margin-left: 1rem;
    color: ${(props) =>
        props.theme === "dark" ? "var(--color-light)" : "var(--color-dark)"};
    text-decoration: none;
    font-size: 400;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: var(--color-primary);
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
    }
    &:hover:before {
        transform: scale(1);
        transform-origin: left;
    }
    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 1200px) {
        color: var(--color-light);
    }
`;

export const Flag = styled.img`
    cursor: pointer;
    margin-left: 1rem;
    width: 2rem;
`;
