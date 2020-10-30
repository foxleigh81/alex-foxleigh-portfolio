import React from 'react'

// Import component files
import AlphaBanner from './index'
import docs from './README.md'

// TODO: This is now used in two places. Make it a proper decorator
const Wrapper: React.FC = (storyFn: any) => <div style={{ height: '900px', position: "relative", overflow: "hidden" }}>{storyFn()}</div>

export default {
  title: 'Molecule/Alpha Banner',
  component: AlphaBanner,
  decorators: [Wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <AlphaBanner />

