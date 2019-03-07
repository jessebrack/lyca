import styled from 'styled-components';
import { borders, size, space } from 'styled-system';

const Image = styled.img`
    display: block;
    max-width: 100%;

	${borders}
    ${size}
    ${space}
`;

Image.displayName = 'Image';

Image.propTypes = {
    ...borders.propTypes,
    ...size.propTypes,
    ...space.propTypes,
};

export default Image;
