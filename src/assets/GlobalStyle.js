import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   html, body {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: -apple-system, BlinkMacSystemFont, 
       'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
   }

   body {
      background: #fefefe;
      height: 100vh;
      max-width: 500px;
      margin: 0 auto;
      overscroll-behavior: none;
      width: 100%;
   }

   ul {
      list-style: none;
      padding: 0;
   }

   button {
      background: none;
      border: none;
   }

   #app {
      box-shadow: 0 0 10px rgba(0,0,0,.05);
      overflow-x: hidden;
      min-height: 100vh;
   }
`
