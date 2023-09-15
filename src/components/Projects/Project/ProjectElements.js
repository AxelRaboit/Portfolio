import styled from "styled-components";

export const Container = styled.div`
  height: 20rem;
  background: ${(props) =>
    props.theme === "dark"
      ? "var(--color-lighter-grey)"
      : "var(--color-light)"};
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: var(--color-light);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  .availability {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .dot {
    position: relative;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }

  .inner-dot {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background-color: ${(props) =>
      props.availability === 0 ? "var(--color-red)" : "var(--color-green)"};
    filter: ${(props) =>
      props.availability === 0
        ? "drop-shadow(0px 5px 10px #f42300)"
        : "drop-shadow(0px 5px 10px #01be9551)"};
    animation: scintillation 2s ease-in-out infinite;
  }

  @keyframes scintillation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .content {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -50rem;
    text-align: left;
    padding: 1rem 1rem;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
    transition: all 400ms ease-in-out;

    .description {
        a.demo-link, a.repo-link {
            color: var(--color-primary);
            text-decoration: none;
            font-size: 0.8rem;

            &:hover {
                text-decoration: underline;
            }
        }

        a.repo-link {
            margin-right: 0.4rem;
        }
    }

    h1 {
      font-size: 1rem;
      margin: 0;
      padding: 0;
    }

    p {
      width: 90%;
      margin: 0;
      font-size: 0.8rem;

      .link {
        color: var(--color-primary);
      }

      .demo-link {
        margin-left: 0.4rem;
      }
    }
  }

  &:hover > img {
    transform: scale(1.3);
  }

  &:hover > .content {
    bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;