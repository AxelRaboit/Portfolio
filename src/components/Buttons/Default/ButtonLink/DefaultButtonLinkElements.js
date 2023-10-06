import styled from "styled-components";

export const Container = styled.button`
    border-radius: 0.5rem;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    background-color: ${(props) =>
        props.color === "primary"
            ? "var(--color-primary)"
            : "var(--color-secondary)"};
    position: relative;
    
    &:focus {
        outline: none;
    }
    
    a {
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        padding: 0.7rem 2rem;
        background-color: ${(props) =>
        props.color === "primary"
            ? "var(--color-primary)"
            : "var(--color-secondary)"};
        border: none;
        font-family: var(--font-roboto-mono);
        position: relative;
        &:hover {
            background-color: ${(props) =>
        props.color === "primary"
            ? "var(--color-primary-hover)"
            : "var(--color-secondary-hover)"};
        }
    }
`;
