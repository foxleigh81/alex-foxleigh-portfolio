import React from 'react'

// Import component files
import Status from './index'
import docs from './README.md'


export default {
  title: 'local/Status',
  component: Status,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Status status="available for work"/>

