import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 840px) {
        width: 90%;
    }
`;

export const FormContainer = styled.div`
    background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-dark-grey)"
            : "var(--color-light)"};
    padding: 1rem;
    border-radius: 5px;
    width: 100%;
`;

export const FormLabel = styled.label`
    font-size: 1.2rem;
`;

export const ContainerFormInput = styled.div`
    border: 1px solid gray;
    margin: 1rem 0;
`;

export const FormInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: ${(props) =>
        props.theme === "dark"
            ? "var(--color-light)"
            : "var(--color-dark-grey)"};

    background-color: transparent;
    padding: 1rem 0.5rem;

    color: ${(props) =>
        props.theme === "dark"
            ? "var(--color-light)"
            : "var(--color-dark-grey)"};
    background-color: transparent;
    padding: 1rem 0.5rem;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: ${(props) =>
            props.theme === "dark"
                ? "var(--color-light)"
                : "var(--color-dark-grey)"} !important;
        -webkit-box-shadow: 0 0 0px 1000px
            ${(props) =>
                props.theme === "dark"
                    ? "var(--color-dark-grey)"
                    : "var(--color-light)"}
            inset !important;
    }
`;

export const ContainerCTA = styled.div`
    button.default-button {
        margin-right: 1rem;
    }
`;
