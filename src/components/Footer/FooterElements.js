import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 840px) {
        width: 90%;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 3rem;
    }
`;
export const Profile = styled.div`
    flex: 1;

    .address {
        padding: 1rem 0;
        h1 {
            font-size: 1.2rem;
        }

        p {
            width: 60%;
            padding-top: 0.5rem;
            @media (max-width: 650px) {
                width: 100%;
            }
        }
    }

    .links {
        h1 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            a {
                text-decoration: none;
                color: var(--color-primary);
                &:hover {
                    color: var(--color-primary);
                }
            }
        }
    }

    .profiles {
        h1 {
            font-size: 1.2rem;
            padding: 1rem 0;
        }

        .icons {
            display: flex;
            align-items: center;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--color-black);
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
                border-radius: 0.5rem;
                transition: all 400ms ease-in-out;

                &:hover {
                    background-color: var(--color-primary);
                }

                a {
                    margin-top: 0.2rem;
                    color: var(--color-white);
                }
            }
        }
    }
`;

export const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #01be96;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 2rem;

    @media (max-width: 650px) {
        position: absolute;
        right: 3rem;
        top: 16rem;
    }
`;

export const Form = styled.div`
    flex: 1;

    h1 {
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }

    form {
        background: ${(props) =>
            props.theme === "dark"
                ? "var(--color-gradient-dark-grey)"
                : "var(--color-white)"};
        padding: 0.8rem;
        border-radius: 5px;

        .name,
        .email,
        .message,
        .subject,
        .phone {
            svg {
                color: var(--color-white);
            }

            display: flex;
            background: ${(props) =>
                props.theme === "dark"
                    ? "var(--color-gradient-lighter-grey)"
                    : "var(--color-darker-white)"};
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;

            input,
            textarea {
                width: 100%;
                border: none;
                outline: none;
                color: ${(props) =>
                    props.theme === "dark"
                        ? "var(--color-white)"
                        : "var(--color-gradient-dark-grey)"};
                background-color: transparent;
                padding: 1rem 0.5rem;

                &:-webkit-autofill,
                &:-webkit-autofill:hover,
                &:-webkit-autofill:focus,
                &:-webkit-autofill:active {
                    transition: background-color 5000s ease-in-out 0s;
                    -webkit-text-fill-color: ${(props) =>
                        props.theme === "dark"
                            ? "var(--color-white)"
                            : "var(--color-gradient-dark-grey)"} !important;
                    -webkit-box-shadow: 0 0 0px 1000px
                        ${(props) =>
                            props.theme === "dark"
                                ? "var(--color-gradient-dark-grey)"
                                : "var(--color-white)"}
                        inset !important;
                }
            }

            span {
                border-radius: 0.5rem 0 0 0.5rem;
                background-color: var(--color-primary);
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .messageIcon {
                align-items: flex-start;
                padding-top: 0.5rem;
            }
        }

        .g-recaptcha {
            margin-top: 1rem;
            transform: scale(0.8);
            transform-origin: 0;
            transform: scale(0.8);
            transform-origin: 0 0;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
        }
    }
`;
