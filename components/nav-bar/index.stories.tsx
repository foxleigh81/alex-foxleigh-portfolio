import React from 'react'

// Import component files
import NavBar from './index'
import docs from './README.md'


export default {
  title: 'Organism/Nav Bar',
  component: NavBar,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <NavBar />

