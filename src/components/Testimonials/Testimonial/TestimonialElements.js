import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media (max-width: 840px) {
        width: 90%;
    }

    span {
        font-weight: 700;
        text-transform: uppercase;
    }

    h1 {
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list,
    .slick-slider,
    .slick-track {
        padding: 0;
    }

    .slick-dots {
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before {
        content: "";
    }

    .slick-dots li button {
        width: 9px;
        height: 4px;
        background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-dark-grey)"
            : "var(--color-light)"};
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }

    .slick-dots li.slick-active button {
        background: var(--color-primary);
        width: 15px;
    }

    .slick-dots li {
        margin: 0;
    }
`;

export const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`;

export const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button {
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: var(--color-primary);
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media (max-width: 530px) {
        display: none;
    }
`;
