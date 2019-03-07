import styled from 'styled-components';
import {
    alignItems,
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    space,
    width,
} from 'styled-system';

const Flex = styled.div`
    display: flex;

    ${alignItems}
    ${flex}
    ${flexDirection}
    ${flexWrap}
    ${justifyContent}
    ${space}
    ${width}
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
    ...alignItems.propTypes,
    ...flex.propTypes,
    ...flexDirection.propTypes,
    ...flexWrap.propTypes,
    ...justifyContent.propTypes,
    ...space.propTypes,
    ...width.propTypes,
};

export default Flex;
