import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
// import createComponent from 'react-unit'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
const test = addAssertions(tape, {jsxEquals})

// Import global data
import data from '../../globals/data.json'

// Component to test
import MainNav from './view'

test('----- React Component Tests: MainNav -----', (t) => {
  // Shallow rendering: Render React element only *one* level deep
  // const component = createComponent.shallow(<MainNav navigation={data.navigation} />)

  // Test rendered output
  const renderer = createRenderer()
  renderer.render(<MainNav navigation={data.navigation} />)
  const result = renderer.getRenderOutput()
  t.jsxEquals(result, <nav className='c-main-nav'><ul><li><a className='u-active' aria-current='true' href='/'>Home</a></li><li><a aria-current='false' href='/about'>About Me</a></li><li><a aria-current='false' href='/skills'>Skills</a></li><li><a aria-current='false' href='/history'>History</a></li><li><a aria-current='false' href='/testimonials'>Testimonials</a></li><li><a aria-current='false' href='/contacts'>Contacts</a></li></ul></nav>)

  t.end()
})
