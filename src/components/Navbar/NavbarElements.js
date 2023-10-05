import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    align-items: center;

    .theme-icon {
        margin-left: 1rem;
        font-size: 1.5rem;
        cursor: pointer;

        color: var(--color-white);
        color: ${(props) =>
            props.theme === "dark"
                ? "var(--color-yellow)"
                : "var(--color-black)"};
        filter: ${(props) =>
            props.theme === "dark" ? "drop-shadow(0px 2px 7px #FFD700)" : ""};

        @media screen and (max-width: 1200px) {
            filter: unset;
            color: var(--color-white);
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
            color: var(--color-white);

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
                ? "var(--color-white)"
                : "var(--color-black)"};
        color: var(--color-white);
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
            color: var(--color-white);
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
        props.theme === "dark" ? "var(--color-white)" : "var(--color-black)"};
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
        color: var(--color-white);
    }
`;

export const Flag = styled(Image)`
    cursor: pointer;
    margin-left: 1rem;
    width: 30px;
    height: 30px;
`;
