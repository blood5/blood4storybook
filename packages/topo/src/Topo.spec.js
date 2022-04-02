import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Topo from '.';

describe('Topo', () => {
    test('primary', () => {
        const tree = renderer.create(<Topo>{'Test'}</Topo>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('secondary', () => {
        const tree = renderer.create(<Topo variant="secondary">{'Test'}</Topo>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
