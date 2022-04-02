import React from 'react';

import Topo from '.';

export default {
    component: Topo,
    title: 'System/Topo'
};

export const primary = () => <Topo>{'Topo'}</Topo>;

export const secondary = () => <Topo variant="secondary">{'Topo'}</Topo>;
