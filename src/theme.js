import { darken, lighten } from 'polished';

/* eslint-disable */
// Theme file that houses design tokens

const space = [0, 4, 8, 16, 32, 64, 128, 160, 256, 512];

const colors = {
    // Base
    black: '#151515',
    white: '#FFF',
    gray: '#CCC',
    // Red
    red: '#f47c7c',
    lightRed: lighten(0.06, '#f47c7c'),
    darkRed: darken(0.55, '#f47c7c'),
    // Green
    green: '#a1de93',
    lightGreen: lighten(0.06, '#a1de93'),
    darkGreen: darken(0.55, '#a1de93'),
    // Blue
    blue: '#70a1d7',
    lightBlue: lighten(0.06, '#70a1d7'),
    darkBlue: darken(0.55, '#70a1d7'),
    yellow: '#f7f48b',
    // Element colors
    get primary() {
        return this.blue;
    },
    get darkPrimary() {
        return this.darkBlue;
    },
    get lightPrimary() {
        return this.lightBlue;
    },
    get text() {
        return this.black;
    },
    get link() {
        return this.primary;
    },
    get linkHover() {
        return this.black;
    },
    get border() {
        return this.gray;
    },
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
        color: colors.darkPrimary,
        bgColor: colors.lightPrimary,
        bgColorHover: colors.primary,
    },
    success: {
        color: colors.darkGreen,
        bgColor: colors.lightGreen,
        bgColorHover: colors.green,
    },
    failure: {
        color: colors.darkRed,
        bgColor: colors.lightRed,
        bgColorHover: colors.red,
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
    none: 'none',
    normal: '1px solid',
};

const radii = {
    normal: '4px',
    circle: '50%',
};

const maxWidths = ['40em', '52em', '64em', '80em'];

// @Variants

const boxPadding = {
    small: {
        paddingTop: `${space[1]}px`,
        paddingBottom: `${space[1]}px`,
        paddingLeft: `${space[2]}px`,
        paddingRight: `${space[2]}px`,
    },
    medium: {
        paddingTop: `${space[2]}px`,
        paddingBottom: `${space[2]}px`,
        paddingLeft: `${space[3]}px`,
        paddingRight: `${space[3]}px`,
    },
    large: {
        paddingTop: `${space[3]}px`,
        paddingBottom: `${space[3]}px`,
        paddingLeft: `${space[4]}px`,
        paddingRight: `${space[4]}px`,
    },
};

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
    // Variants
    boxPadding,
};

export default theme;
