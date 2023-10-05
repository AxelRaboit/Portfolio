import styled from "styled-components";

export const Container = styled.button`
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-weight: 500;
    filter: var(--drop-shadow-green);
    position: relative;

    &:focus {
        outline: none;
    }

    a {
        border-radius: .5rem;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
        text-decoration: none;
        padding: 0.7rem 2rem;
        background-color: var(--color-black);
        border: none;
        font-weight: 500;
        position: relative;
    }

    &:hover {
        filter: var(--drop-shadow-green-darker);
    }
`;
