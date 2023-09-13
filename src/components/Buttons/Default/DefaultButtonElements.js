import styled from "styled-components";

export const Container = styled.button`
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    font-weight: 500;
    filter: var(--drop-shadow-green);
    position: relative;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-decoration: none;
    }

    &:hover {
        filter: var(--drop-shadow-green-darker);
    }
`;