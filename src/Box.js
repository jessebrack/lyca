import styled from 'styled-components';
import { borderRadius, space, width, color, textAlign } from 'styled-system';

const Box = styled.div`
	${borderRadius}
	${color}
	${space}
	${textAlign}
	${width}
`;

Box.propTypes = {
    ...borderRadius.propTypes,
    ...color.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
    ...width.propTypes,
};

Box.displayName = 'Box';

export default Box;
