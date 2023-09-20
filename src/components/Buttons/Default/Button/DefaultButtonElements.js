import styled from "styled-components";

export const Button = styled.button`
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    font-family: var(--font-roboto-mono);
    filter: var(--drop-shadow-green);
    position: relative;
    color: var(--color-light);
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: var(--drop-shadow-green-darker);
    }

    &:disabled {
        background-color: var(--color-not-allowed);
        filter: var(--drop-shadow-green);
        cursor: not-allowed;

        &:hover {
        filter: var(--drop-shadow-green-darker);
    }
    }
`;