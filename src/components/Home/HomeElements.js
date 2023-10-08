import styled from "styled-components";

export const ContainerArrow = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow-down-icon {
        color: var(--color-primary);
        font-size: 3rem;
        animation: bounceUpDown 2s infinite;
        cursor: pointer;

        &:hover {
            color: var(--color-primary-hover);
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

export const Banner = styled.div`
    background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-gradient-deep-dark-grey)"
            : "var(--color-white)"};
            /* height: calc(100vh - 58px); */
    
    @media (max-width: 1400px) {
        /* height: 100%; */
        padding-bottom: 2rem;
    }
`;
