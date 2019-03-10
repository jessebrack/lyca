import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';

const Avatar = ({ image, alt, size, ...props }) => (
    <Image
        src={image}
        alt={alt}
        size={size || '100px'}
        borderRadius="circle"
        {...props}
    />
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.array,
    ]),
};

export default Avatar;
