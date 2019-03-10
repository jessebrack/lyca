import styled from 'styled-components';
import { space, width, color, textAlign, themeGet } from 'styled-system';

const Card = styled.div`
	border: ${themeGet('borders.normal')};
    border-color: ${themeGet('colors.border')};
	border-radius: ${themeGet('radii.normal')};

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

Card.defaultProps = {
    p: 4,
};

Card.displayName = 'Card';

export default Card;
