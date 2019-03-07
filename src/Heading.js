import styled from 'styled-components';
import Text from './Text';

const Heading = styled(Text)``;

Heading.displayName = 'Heading';

Heading.defaultProps = {
    as: 'h2',
};

export default Heading;
