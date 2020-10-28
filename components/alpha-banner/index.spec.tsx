/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AlphaBanner from './index'

it('AlphaBanner renders correctly', () => {
  const tree = renderer
    .create(<AlphaBanner />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});