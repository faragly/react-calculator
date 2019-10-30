import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        height: 100%;
    }

    body {
        background-color: #E8EBFB;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
`;

render((
    <Fragment>
        <GlobalStyle />
        <App />
    </Fragment>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
