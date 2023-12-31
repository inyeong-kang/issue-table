import { createGlobalStyle } from 'styled-components';

import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
    
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border:none
  }
  
  ul,
  li {
    list-style: none;
  }
  
  html,
  body {
    font-family: sans-serif;
    font-size: 62.5%;
  }

  :root {
    /* Colors *****************************************/
    --primary-color: #1A8CFF;
    --red: #F51A18;
    --white: #ffffff;
    --gray: #5A6066;
    --light-gray: #F5F8FA;
    
    
    /* Fonts *****************************************/
    --text-page-title: 700 30px/30px Prentarded;
    --text-title: 700 20px/30px Prentarded;
    --text-subtitle: 600 1.8rem/2rem Prentarded;
    --text-body: 500 14px/20px Prentarded;
    --text-caption: 400 1.6rem/2rem Prentarded;
    --text-default: 400 1.4rem/2rem Prentarded;
    --text-small: 400 1.2rem/1.8rem Prentarded;
  }  
`;
