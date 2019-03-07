import styled from 'styled-components';
import { space, width, color, textAlign, themeGet } from 'styled-system';

const Card = styled.div`
	background-color: ${themeGet('colors.white')};
	border: ${themeGet('borders.normal')};
    border-color: ${themeGet('colors.border')};
	border-radius: ${themeGet('radii.normal')};
	padding: ${themeGet('space.4')}px;

	${color}
	${space}
	${textAlign}
	${width}
`;

Card.propTypes = {
    ...color.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
    ...width.propTypes,
};

Card.displayName = 'Card';

export default Card;
