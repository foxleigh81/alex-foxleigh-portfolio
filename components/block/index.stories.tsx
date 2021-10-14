import React from 'react'

// Import component files
import Block from './index'
import docs from './README.md'


export default {
  title: 'Atom/Block',
  component: Block,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Block name="test" colour="green"/>

