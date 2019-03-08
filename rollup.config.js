import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
const commonjs = require('rollup-plugin-commonjs');

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**', // only transpile our source code
        }),
        commonjs(),
        resolve(),
    ],
    external: [
        'styled-components',
        'react',
        'react-dom',
        'prop-types',
        'styled-system',
    ],
};
