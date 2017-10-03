// Import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Stylesheet
import './globals/styles/core.styl'

// Import global data
import data from './globals/data.json'

// Import templates
import Home from './templates/Home/view'
import Skills from './templates/Skills/view'
import NotFound from './templates/NotFound/view'

// Import components
import PageHeader from './components/c-page-header/view'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='u-page-wrapper'>
          <PageHeader data={data} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/skills' component={Skills} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
