import styled from 'styled-components';
import { space, width, color, size, textAlign } from 'styled-system';

const Box = styled.div`
	${color}
	${space}
	${textAlign}
	${size}
	${width}
`;

Box.propTypes = {
    ...color.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
    ...size.propTypes,
    ...width.propTypes,
};

Box.displayName = 'Box';

export default Box;
