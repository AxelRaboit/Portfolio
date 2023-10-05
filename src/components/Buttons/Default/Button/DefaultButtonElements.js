import styled from "styled-components";

export const Button = styled.button`
    border-radius: 0.5rem;
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    font-family: var(--font-roboto-mono);
    transition: all 0.2s ease-in-out;
    position: relative;
    color: var(--color-white);
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: var(--color-primary-hover);
    }

    &:disabled {
        background-color: var(--color-not-allowed);
        cursor: not-allowed;

        &:hover {
            background-color: var(--color-not-allowed-hover);
        }
    }
`;
