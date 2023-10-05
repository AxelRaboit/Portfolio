import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 840px) {
        width: 90%;
    }

    h4 span.skills-title-sup {
        color: var(--color-primary);
    }

    h1.skills-title {
        padding-top: 1rem;
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`;
