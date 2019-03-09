/* eslint-disable */
// Theme file that houses design tokens

export const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 160, 256, 512],

    colors: {
        black: '#151515',
        white: '#fff',
        yellow: '#f8ed69',
        accent: '#738598',
        accentDark: '#3c415e',
        gray: '#888',
        border: '#ddd',
        text: '#111',
        link: 'blue',
        linkHover: 'red',
    },

    fontSizes: [
        '.889rem',
        '1rem',
        '1.125rem',
        '1.266rem',
        '1.424rem',
        '2.027rem',
        '2.566rem',
        '3.247rem',
    ],

    fonts: {
        sansSerif:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    },

    fontWeights: {
        regular: 400,
        bold: 700,
    },

    letterSpacings: {
        normal: 0,
        title: '.1em',
        loose: '.25em',
    },

    lineHeights: {
        min: 1,
        tight: 1.3,
        normal: 1.72,
        loose: 1.92,
    },

    borders: {
        normal: '1px solid',
    },

    radii: {
        normal: '4px',
        circle: '50%',
    },

    maxWidths: ['40em', '52em', '64em', '80em'],
};
