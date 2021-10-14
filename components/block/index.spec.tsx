/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Block from './index'

it('Block renders correctly', () => {
  const tree = renderer
    .create(<Block name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});