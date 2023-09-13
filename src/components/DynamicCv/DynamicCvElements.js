import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 0;

    .container-introduction {
        margin-bottom: 2rem;
    }

    h2 {
        margin: 0 0 2rem 0;
        padding: 1rem 0;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 400;
    }

    h4 {
        color: var(--color-primary);
        font-weight: bold;
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.2rem;
        color: var(--color-primary);
    }

    h6 {
        font-size: 1.2rem;
    }

    .xp-post-desc {
        margin-bottom: 1rem;
        color: var(--color-primary);
        font-weight: bold;
    }

    ul > li {
        margin-bottom: 0.5rem;
    }

    .container-xp {
        border: solid 1px var(--color-primary);
        padding: 1rem;
        margin-bottom: 1rem;

        .xp-date {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
            
            color: var(--color-light);
        }
    }
`;
