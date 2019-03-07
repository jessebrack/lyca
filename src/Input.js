import styled from 'styled-components';
import { space, themeGet } from 'styled-system';

const Input = styled.input`
    display: block;
    width: 100%;

    background-color: ${themeGet('colors.white')};
    border: ${themeGet('borders.normal')};
    border-color: ${themeGet('colors.border')};
    border-radius: ${themeGet('radii.normal')};
    padding-top: ${themeGet('space.2')}px;
    padding-bottom: ${themeGet('space.2')}px;
    padding-left: ${themeGet('space.3')}px;
    padding-right: ${themeGet('space.3')}px;

    ::placeholder {
        color: ${themeGet('colors.gray')};
    }

    ${space}
`;

Input.displayName = 'Input';

Input.propTypes = {
    ...space.propTypes,
};

export default Input;
