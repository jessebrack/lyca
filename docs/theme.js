/* eslint-disable */
// Theme file that houses design tokens

const space = [0, 4, 8, 16, 32, 64, 128, 160, 256, 512];

const colors = {
    // Primary Colors
    black: '#151515',
    white: '#fff',
    red: 'red',
    green: 'green',
    blue: 'blue',
    // Element colors
    primary: 'hotpink',
    text: '#111',
    link: 'blue',
    linkHover: 'red',
    border: '#ddd',
};

const colorStyles = {
    textOnDark: {
        color: colors.white,
        bgColor: colors.black,
        bgColorHover: colors.black,
    },
    textOnLight: {
        color: colors.black,
        bgColor: colors.white,
        bgColorHover: colors.black,
    },
    textOnPrimary: {
        color: colors.white,
        bgColor: colors.primary,
        bgColorHover: colors.black,
    },
};

const fontSizes = [
    '.889rem',
    '1rem',
    '1.125rem',
    '1.266rem',
    '1.424rem',
    '2.027rem',
    '2.566rem',
    '3.247rem',
];

const fonts = {
    sansSerif:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
};

const fontWeights = {
    regular: 400,
    bold: 700,
};

const letterSpacings = {
    normal: 0,
    title: '.1em',
    loose: '.25em',
};

const lineHeights = {
    min: 1,
    tight: 1.3,
    normal: 1.72,
    loose: 1.92,
};

const borders = {
    normal: '1px solid',
};

const radii = {
    normal: '4px',
    circle: '50%',
};

const maxWidths = ['40em', '52em', '64em', '80em'];

const theme = {
    space,
    colors,
    colorStyles,
    fontSizes,
    fonts,
    fontWeights,
    letterSpacings,
    lineHeights,
    borders,
    radii,
    maxWidths,
};

export default theme;
