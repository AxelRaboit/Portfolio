import styled from "styled-components";

export const ContainerArrow = styled.div`
    position: fixed;
    right: 50px;
    bottom: 20px;
    z-index: 999;

    .arrow-up-icon {
        color: var(--color-primary);
        font-size: 3rem;
        color: var(--color-primary);
        cursor: pointer;

        &:hover {
            color: var(--color-primary-hover);
            animation: none;
        }
    }
`;