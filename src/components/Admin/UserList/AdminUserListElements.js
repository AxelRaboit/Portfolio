import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div``;

export const Title = styled.h1`
    margin-bottom: 1rem;
`;

export const UserList = styled.div`
    li {
        list-style-type: none;
        margin-bottom: 0.5rem;
    }
`;

export const Linkk = styled(Link)`
    text-decoration: none;
    color: ${(props) =>
        props.theme === "dark"
            ? "var(--color-light)"
            : "var(--color-dark-grey)"};
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
    }
`;