import { Global, css } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Cafe24ShiningStar";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff")
      format("woff");
    font-weight: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    outline: unset;
    list-style: none;
    font-family: "Cafe24ShiningStar", sans-serif;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  label {
    cursor: pointer;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};
