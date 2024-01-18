import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  img {
    width: 20.6rem;

    margin-block: 5.8rem 2.8rem;
  }

  main {
    animation: UpToDown 600ms forwards;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin: 3.8rem 1.5rem;
  }

  section .paragraphs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  h3 {
    color: #5a5a5a;
  }

  form {
    animation: UpToDown 600ms forwards;
  }

  @keyframes UpToDown {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
`;

export const Form = styled.form`
  border-radius: 0.8rem;

  background: #f1f9fe; /*  */

  > * {
    max-width: 30rem;

    margin-inline: auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    margin-block: 2.3rem 1.6rem;
  }

  padding-block: 3.5rem;
`;
