import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import client from './lib/apolloClient'

// Import components
import SiteHeader from './components/presentational/SiteHeader'

class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <ApolloProvider client={client}>
        <div>
          <SiteHeader />
          <main>
            <h1>Main content goes here</h1>
          </main>
        </div>
      </ApolloProvider>
    )
  }
}
export default App

const wrapper = document.getElementById('appRoot')
wrapper ? ReactDOM.render(<App />, wrapper) : false
