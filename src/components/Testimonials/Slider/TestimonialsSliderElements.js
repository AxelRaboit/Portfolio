import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 0.5rem;
    background: ${(props) =>
        props.theme === "dark"
            ? "var(--color-gradient-lighter-grey)"
            : "var(--color-white)"};
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .quote {
        font-size: 3rem;
        color: var(--color-primary);
        opacity: 0.7;
    }

    .star {
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
export const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
export const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1 {
        font-size: 1.2rem;
        font-weight: 700;
       
        @media(max-width: 580px){
            font-size: 1rem;
        }

        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p   {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`