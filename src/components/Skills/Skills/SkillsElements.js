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

    .container-skills-buttons {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        button:first-child {
            margin-right: 1rem;
        }
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`;
