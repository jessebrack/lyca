import styled from 'styled-components';
import {
    color,
    fontSize,
    fontWeight,
    space,
    themeGet,
    style,
} from 'styled-system';

const textDecoration = style({
    prop: 'textDecoration',
    cssProperty: 'textDecoration',
});

const Link = styled.a`
    cursor: pointer;
    text-decoration: underline;

    &:hover,
    &:focus {
        color: ${themeGet('colors.linkHover')};
        text-decoration: none;
    }

	${color}
	${fontSize}
	${fontWeight}
	${space}
	${textDecoration}
`;

Link.displayName = 'Link';

Link.propTypes = {
    ...color.propTypes,
    ...fontSize.propTypes,
    ...fontWeight.propTypes,
    ...space.propTypes,
    ...textDecoration.propTypes,
};

Link.defaultProps = {
    color: 'link',
};

export default Link;
