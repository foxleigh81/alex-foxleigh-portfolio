import React from 'react'
// Import component files
import Status from './index'
import docs from './README.md'


export default {
  title: 'Organism/Status',
  component: Status,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Available: React.FC = () => <Status status='available' />
export const Unavailable: React.FC = () => <Status status='unavailable' date="2/12/81" />
export const UnavailableNoReturnDate: React.FC = () => <Status status='unavailable' />
export const OnHoliday: React.FC = () => <Status status='holiday' date="2/12/81" />

