import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Avatar = ({ image, alt, ...props }) => (
    <Image
        src={image}
        alt={alt}
        size="100px"
        borderRadius="circle"
        {...props}
    />
);

Avatar.displayName = 'Avatar';

export default Avatar;
