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

export const Available: React.FC = () => <Welcome status="available" minime="available" />
export const Unavailable: React.FC = () => <Welcome status="unavailable" minime="at-desk" />
export const OnHoliday: React.FC = () => <Welcome status="holiday" minime="smile" />

