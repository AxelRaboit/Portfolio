import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-spinner {
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid var(--color-primary);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
