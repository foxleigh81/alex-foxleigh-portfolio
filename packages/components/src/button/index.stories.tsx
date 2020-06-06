import React from 'react'

// Import component files
import Button from './index'
import docs from './README.md'


export default {
  title: 'Button',
  component: Button,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Button>Click me</Button>

