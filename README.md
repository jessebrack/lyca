# Lyca

![npm (scoped)](https://img.shields.io/npm/v/@puppies4life/lyca.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](https://opensource.org/licenses/MIT)

## Introduction

Lyca is a system of primitive UI components that allow you to compose more complex, application specific design components. Each component is a small, isolated UI element that is interconnected by the rules of a design system.

The capabilities of the components are exposed by an API of standardized props which take values from your design tokens (theme).

### Benefits

-   Singularity
-   Composability
-   Consistency
-   Constraints
-   Responsive
-   Small file size <2KB

## Quick Start

Install Lyca as a dependency for your project

```sh
npm install @puppies4life/lyca
```

Wrap your application around the `ThemeProvider` component. This allows you to use a theme which houses your design system's tokens. If you do not [create your own theme file](/), Lyca will resort to internal defaults.

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../yourThemeLocation.js';

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>Your app</div>
            </ThemeProvider>
        );
    }
}
```

Import one of Lyca's primitive components into your application.

```jsx
import React from 'react';
import { Heading } from '@puppies4life/lyca';

const YourView = props => <Heading>Hey, I'm a heading!</Heading>;

export default YourView;
```

Compose more complex, application specific components using Lyca's primitives.

```jsx
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
```
