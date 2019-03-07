import React from 'react';
import styled from 'styled-components';
import ImageAlt from './ImageAlt';

const Avatar = ({ image, alt, ...props }) => (
    <ImageAlt
        src={image}
        alt={alt}
        size="100px"
        borderRadius="circle"
        {...props}
    />
);

Avatar.displayName = 'Avatar';

export default Avatar;
