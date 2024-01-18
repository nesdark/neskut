import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: #E6E6E6;
  }

  body * {
    font-family: 'Rubik', sans-serif;
  }

  a, button {
    cursor: pointer;

    transition: 200ms;
  }

  a:hover, button:hover {
    transform: scale(1.05);
    filter: brightness(1.05);
  }

  h2, h3 {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: normal;
  }

  .sr-only {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;
