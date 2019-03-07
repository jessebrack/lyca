import styled from 'styled-components';
import { maxWidth } from 'styled-system';

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;

    ${maxWidth}
`;

Container.displayName = 'Container';

Container.propTypes = {
    ...maxWidth.propTypes,
};

Container.defaultProps = {
    maxWidth: 1,
};

export default Container;
