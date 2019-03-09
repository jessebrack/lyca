import styled from 'styled-components';
import { space, width, themeGet, variant } from 'styled-system';
import { PropTypes } from 'prop-types';
import theme from './theme';

const buttonType = props => {
    switch (props.type) {
        case 'success':
            return `
                background-color: ${theme.colorStyles.success.bgColor};
                color: ${theme.colorStyles.success.color};
				&:hover,
				&:focus {
				    background-color: ${
                        props.disabled
                            ? null
                            : theme.colorStyles.success.bgColorHover
                    }
            `;
        case 'failure':
            return `
				background-color: ${theme.colorStyles.failure.bgColor};
				color: ${theme.colorStyles.failure.color};
				&:hover,
				&:focus {
					background-color: ${
                        props.disabled
                            ? null
                            : theme.colorStyles.failure.bgColorHover
                    }
			`;
        default:
            return `
				background-color: ${theme.colorStyles.textOnPrimary.bgColor};
				color: ${theme.colorStyles.textOnPrimary.color};
				&:hover,
				&:focus {
					background-color: ${
                        props.disabled
                            ? null
                            : theme.colorStyles.textOnPrimary.bgColorHover
                    }
			`;
    }
};

const Button = styled.button`
    border-width: 0;
    display: inline-block;
    text-align: center;

    border-radius: ${themeGet('radii.normal')};
    cursor: ${props => (props.disabled ? null : 'pointer')};

    &:disabled {
        opacity: 0.25;
    }

	${space}
	${width}
	${buttonType}
`;

Button.displayName = 'Button';

Button.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    type: PropTypes.string,
};

Button.defaultProps = {
    py: 2,
    px: 3,
};

export default Button;
