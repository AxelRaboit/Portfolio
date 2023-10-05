import styled from "styled-components";

export const Container = styled.div`
    border-radius: 0.5rem;
    width: 100%;
    height: 300px;
    position: relative;
    background: ${(props) =>
    props.theme === "dark"
        ? "var(--color-gradient-lighter-grey)"
        : "var(--color-white)"
    };

    padding: 1rem;
    text-align: center;

    .card-icon {
        color: var(--color-primary);
    }

    button {
        position: absolute;
        border-radius: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
    }
    
    span {
        font-size: 4rem;
    }

    h1 {
        font-size: 1.2rem;
        padding: 1rem 0;
    }

    p {
        font-size: 0.8rem;
    }
`;