import React from 'react';

import Button from '.';

export default {
    component: Button,
    title: 'System/Button'
};

export const primary = () => <Button>{'Button'}</Button>;

export const secondary = () => <Button variant="secondary">{'Button'}</Button>;
