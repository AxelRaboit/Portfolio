import styled from "styled-components";

export const Container = styled.div`
    
    text-align: center;
    position: relative;

    @media (max-width: 840px) {
        width: 90%;
    }

    h1 {
        font-size: 1.9rem;

        .title {
            color: var(--color-primary);
        }
    }

    p {
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;

        @media (max-width: 500px) {
            width: 90%;
        }
    }

    .project-number {
        border-radius: 0.5rem;
        color: var(--color-white);
        margin-top: 1rem;
        background-color: var(--color-primary);
    }
`;
