import styled from 'styled-components';
import {
    color,
    fontSize,
    fontWeight,
    lineHeight,
    space,
    textAlign,
} from 'styled-system';

const Text = styled.p`
	${color}
	${fontSize}
	${fontWeight}
	${lineHeight}
	${space}
	${textAlign}
`;

Text.displayName = 'Text';

Text.propTypes = {
    ...color.propTypes,
    ...fontSize.propTypes,
    ...fontWeight.propTypes,
    ...lineHeight.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
};

export default Text;
