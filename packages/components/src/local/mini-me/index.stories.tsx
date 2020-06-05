import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
// Import component files
import MiniMe from './index'
import docs from './README.md'


export default {
  title: 'local/MiniMe',
  component: MiniMe,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const minimes = [
  'at-desk',
  'smile',
  'blushing',
  'phone',
  'skills',
  'available'
]

const miniMeKnobs: Function = (selected: string) => select('Choose a Mini Me', minimes, selected, 'options' )

export const Default: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={miniMeKnobs('at-desk')} position="none"/></div>

