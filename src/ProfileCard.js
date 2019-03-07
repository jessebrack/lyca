import React from 'react';
import Avatar from './Avatar';
import Card from './Card';
import Heading from './Heading';
import Text from './Text';

const ProfileCard = ({ image, alt, name, title, ...props }) => (
    <Card {...props} textAlign="center">
        <Avatar src={image} alt={alt} mx="auto" />
        <Heading my={1}>{name}</Heading>
        <Text my={0}>{title}</Text>
    </Card>
);

export default ProfileCard;
