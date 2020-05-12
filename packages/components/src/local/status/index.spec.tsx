/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Status from './index'

it('Status renders correctly', () => {
  const tree = renderer
    .create(<Status status="Available for work" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});