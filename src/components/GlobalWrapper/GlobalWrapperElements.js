import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div``;

export const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
  }
  body {
    position: ${(props) => (props.scrollIsLocked === 1 ? "fixed" : "")};
    background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-black)"
            : "var(--color-darker-white)"};
    color: ${(props) =>
        props.theme === "dark" ? "var(--color-white)" : "var(--color-black)"};
  }

    .slick-list, .slick-slider, .slick-track {
        padding: 1.5rem 0;
        transform: scale(1);
    }

    .center .slick-center .project {
        transform: scale(1.15);
        z-index: 1000;
        transition: all 400ms ease-in-out;
        pointer-events: all;
        opacity: 1;
    }

    .center .project {
        border: solid var(--color-primary) 2px;
        background-color: var(--color-primary);
        opacity: 0.5;
        transform: scale(1);
        pointer-events: none;
    }

    @media(max-width: 990px){
        .center .slick-center .project {
            transform: scale(1);
        }

        .center .project {
            opacity: 1;
            pointer-events: all;
        }
    }

`;

export const Background = styled.div`
    background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-gradient-dark-grey)"
            : "var(--color-white)"};
`;

export const LightColor = styled.div`
    background: var(--color-gradient-dark-grey);
`;

export const ContainerArrow = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow-down-icon {
        color: var(--color-primary);
        font-size: 3rem;
        background-color: var(--color-primary);
        animation: bounceUpDown 2s infinite;
        cursor: pointer;

        &:hover {
            background-color: var(--color-primary-hover);
            animation: none;
        }
    }

    @keyframes bounceUpDown {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
