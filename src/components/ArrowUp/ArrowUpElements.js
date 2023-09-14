import styled from "styled-components";

export const ContainerArrow = styled.div`
    position: fixed;
    right: 50px;
    bottom: 20px;
    z-index: 999;

    .arrow-up-icon {
        color: var(--color-primary);
        font-size: 3rem;
        filter: var(--drop-shadow-green);
        cursor: pointer;

        &:hover {
            filter: var(--drop-shadow-green-darker);
            animation: none;
        }
    }
`;