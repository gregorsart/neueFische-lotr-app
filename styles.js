import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-text-color-light: #d9c9b5;
    --main-text-color-dark: #2E4037;
    --main-bg-color: #483C32;
    --main-bg-color-semitransparent: #7FFFD412;
    --main-button-bg-color: #D2B48C;
    --main-contrast-color: #7FFFD4;

    --margin-x: 2rem;
    --margin-y: 2rem;
  }

  
  
  body {
    line-height: 1.6;
    background-color: var(--main-bg-color);
    color: var(--main-text-color-light);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  nav {
    display: flex;
    gap: 1rem;
    margin: var(--margin-y) var(--margin-x)
  }

  h1,h2,h3,h4 {
    font-family: ${lora.style.fontFamily}, serif;
    margin: 2rem var(--margin-x);
    font-weight: 400;
  }

  h1{
    font-size: 3rem;
    line-height: 1.2;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 1.5rem;
  }

  p { margin: var(--margin-y) var(--margin-x);}



  /* Specific */

  .link__secondary {
    color: #88b9b4;
    text-decoration: none;
    background-color: rgb(238, 238, 238);
    padding: 0.5rem 1rem;
    width: fit-content;
    border-radius: 0.5rem;
    cursor: pointer;
  }

`;
