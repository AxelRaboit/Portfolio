import styled from "styled-components";

export const Container = styled.button`
    border-radius: 0.5rem;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-weight: 500;
    background-color: var(--color-primary);
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
        transition: all 0.2s ease-in-out;
        padding: 0.7rem 2rem;
        background-color: var(--color-black);
        border: none;
        font-weight: 500;
        position: relative;

        &:hover {
            background-color: var(--color-primary-hover);
        }
    }

`;
