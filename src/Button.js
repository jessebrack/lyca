import styled from 'styled-components';
import { space, width, themeGet } from 'styled-system';
import { PropTypes } from 'prop-types';

const Button = styled.button`
    border-width: 0;
    display: inline-block;
    text-align: center;

    background-color: ${themeGet('colorStyles.textOnPrimary.bgColor')};
    border-radius: ${themeGet('radii.normal')};
    color: ${themeGet('colorStyles.textOnPrimary.color')};
    cursor: ${props => (props.disabled ? null : 'pointer')};

    &:hover,
    &:focus {
        background-color: ${props =>
            props.disabled
                ? null
                : themeGet('colorStyles.textOnPrimary.bgColorHover')};
    }

    &:disabled {
        opacity: 0.25;
    }

    ${space}
    ${width}
`;

Button.displayName = 'Button';

Button.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
};

Button.defaultProps = {
    py: 3,
    px: 4,
};

export default Button;
