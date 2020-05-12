import React from 'react'

// Import component files
import Welcome from './index'
import docs from './README.md'


export default {
  title: 'local/Welcome',
  component: Welcome,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Welcome name="test" colour="green"/>

