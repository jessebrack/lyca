import styled from 'styled-components';
import { space, width, color, textAlign } from 'styled-system';

const Box = styled.div`
	${color}
	${space}
	${textAlign}
	${width}
`;

Box.propTypes = {
    ...color.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
    ...width.propTypes,
};

Box.displayName = 'Box';

export default Box;
