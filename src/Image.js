import styled from 'styled-components';
import { borders, display, size, space } from 'styled-system';

const Image = styled.img`
    max-width: 100%;

	${borders}
	${display}
    ${size}
    ${space}
`;

Image.displayName = 'Image';

Image.propTypes = {
    ...borders.propTypes,
    ...display.propTypes,
    ...size.propTypes,
    ...space.propTypes,
};

Image.defaultProps = {
    display: 'block',
};

export default Image;
