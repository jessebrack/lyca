import styled from 'styled-components';
import { color, themeGet } from 'styled-system';

const Link = styled.a`
    cursor: pointer;
    text-decoration: underline;

    &:hover,
    &:focus {
        color: ${themeGet('colors.linkHover')};
        text-decoration: none;
    }

    ${color}
`;

Link.displayName = 'Link';

Link.propTypes = {
    ...color.propTypes,
};

Link.defaultProps = {
    color: 'link',
};

export default Link;
