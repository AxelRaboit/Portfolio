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
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-decoration: none;
        padding: 0.7rem 2rem;
        background-color: var(--color-primary);
        border: none;
        font-weight: 500;
        position: relative;
    }

    &:hover {
        filter: var(--drop-shadow-green-darker);
    }
`;