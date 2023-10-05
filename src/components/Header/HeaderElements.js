import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    .bars {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;

            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${(props) => {
                    if (props.bar) {
                        return "transparent";
                    } else if (
                        (props.theme === "dark" && props.bar) ||
                        (props.theme === "light" && props.bar) ||
                        (props.theme === "dark" && !props.bar)
                    ) {
                        return "var(--color-white)";
                    } else {
                        return "var(--color-black)";
                    }
                }};

                &::before,
                &::after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: ${(props) => {
                        if (
                            (props.theme === "dark" && props.bar) ||
                            (props.theme === "light" && props.bar) ||
                            (props.theme === "dark" && !props.bar)
                        ) {
                            return "var(--color-white)";
                        } else {
                            return "var(--color-black)";
                        }
                    }};

                    position: absolute;
                }

                &::before {
                    transform: ${(props) =>
                        props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                &::after {
                    transform: ${(props) =>
                        props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 1.8rem;
        color: var(--color-primary);
    }

    h1 {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;
