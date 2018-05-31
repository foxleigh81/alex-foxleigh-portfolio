import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Import components
import SiteHeader from './components/presentational/SiteHeader'

class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <SiteHeader />
        <main>
          <h1>Main content goes here</h1>
        </main>
      </div>
    )
  }
}
export default App

const wrapper = document.getElementById('appRoot')
wrapper ? ReactDOM.render(<App />, wrapper) : false
