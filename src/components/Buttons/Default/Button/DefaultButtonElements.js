import styled from "styled-components";

export const Button = styled.button`
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    font-weight: 500;
    filter: var(--drop-shadow-green);
    position: relative;
    color: #fff;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: var(--drop-shadow-green-darker);
    }
`;