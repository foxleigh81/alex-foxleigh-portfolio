/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MiniMe from './index'

it('MiniMe renders correctly', () => {
  const tree = renderer
    .create(<MiniMe name="smile" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});