import React from 'react';
import Avatar from './Avatar';
import Card from './Card';
import Heading from './Heading';
import Text from './Text';

const ProfileCard = ({ image, alt, name, title, type, ...props }) => {
    const profileAlign = type || 'center';

    return (
        <Card {...props} textAlign={profileAlign}>
            <Avatar src={image} alt={alt} display="inlinne" />
            <Heading my={1}>{name}</Heading>
            <Text my={0}>{title}</Text>
        </Card>
    );
};

export default ProfileCard;
