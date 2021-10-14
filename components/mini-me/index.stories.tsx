import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
// Import component files
import MiniMe from './index'
import docs from './README.md'


export default {
  title: 'Molecule/Mini Me',
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
  'available',
  'beach'
]

const miniMeKnobs: Function = (selected: string) => select('Choose a Mini Me', minimes, selected, 'options' )

export const Default: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'available'} width="regular" position="none"/></div>
export const AtDesk: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'at-desk'} width="regular" position="none"/></div>
export const Smile: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'smile'} width="regular" position="none"/></div>
export const Blushing: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'blushing'} width="regular" position="none"/></div>
export const OnPhone: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'phone'} width="regular" position="none"/></div>
export const Skills: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'skills'} width="regular" position="none"/></div>
export const Beach: React.FC = () => <div style={{height: '400px'}} ><MiniMe name={'beach'} width="regular" position="none"/></div>

