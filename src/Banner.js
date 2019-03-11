import React from 'react';
import theme from './theme';
import { Box, Text } from './';

const bannerType = {
    success: theme.colorStyles.success,
    failure: theme.colorStyles.failure,
    default: theme.colorStyles.textOnPrimary,
};

const Banner = ({ heading, description, type, children, ...props }) => {
    const bannerColor = bannerType[type] || bannerType.default;

    return (
        <Box
            bg={bannerColor.bgColor}
            py={3}
            px={4}
            mb={3}
            color={bannerColor.color}
            {...props}
        >
            <Text fontSize={4} my={0}>
                {heading}
            </Text>
            <Text mt={2}>{description}</Text>
            {children}
        </Box>
    );
};

export default Banner;
