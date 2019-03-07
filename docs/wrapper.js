import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
	${styledNormalize}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background-color: ${theme.colors.white};
		color: ${theme.colors.black};
		font-family: ${theme.fonts.sansSerif};
		font-size: ${theme.fontSizes[3]};
		line-height: ${theme.lineHeights.normal};
	}

	h1, h2, h3, h4, h5, h6 {
		margin-top: 2em;
		margin-bottom: 1em;
	}

	h1 {
		font-size: ${theme.fontSizes[7]};
	}

	h2 {
		font-size: ${theme.fontSizes[6]};
	}

	h3 {
		font-size: ${theme.fontSizes[5]};
	}

	h4 {
		font-size: ${theme.fontSizes[4]};
	}

	h5 {
		font-size: ${theme.fontSizes[3]};
	}

	h6 {
		font-size: ${theme.fontSizes[2]};
	}

	h7 {
		font-size: ${theme.fontSizes[1]};
	}

	ul {
		margin-top: 0;
		padding-left: 0;
	}

`;

const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            {children}
        </>
    </ThemeProvider>
);

export default Wrapper;
