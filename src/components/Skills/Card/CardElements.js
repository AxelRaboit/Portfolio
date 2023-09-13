import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    background: ${(props) =>
    props.theme === "dark"
        ? "var(--color-lighter-grey)"
        : "var(--color-light)"
    };

    padding: 1rem;
    text-align: center;

    .card-icon {
        color: var(--color-primary);
    }

    button {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        padding: 0.7rem 2rem;
        cursor: pointer;
        background-color: var(--color-primary);
        border: none;
        color: #fff;
        font-weight: 500;
        filter: var(--drop-shadow-green);

        &:hover {
            filter: var(--drop-shadow-green-darker);
        }
    }
    
    span {
        font-size: 4rem;
    }

    h1 {
        font-size: 1.2rem;
        padding: 1rem 0;
    }

    p {
        font-size: 0.8rem;
    }
`;