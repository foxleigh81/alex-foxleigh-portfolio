/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Welcome from './index'

it('Welcome renders correctly', () => {
  const tree = renderer
    .create(<Welcome name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});