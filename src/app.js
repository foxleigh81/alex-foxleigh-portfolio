// Import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'

// Import Stylesheet
import './globals/styles/core.styl'

// Import global data
import data from './globals/data.json'

// Import components
import PageHeader from './components/c-page-header/view'

class App extends React.Component {
  render () {
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    }
    return (
      <div className='u-page-wrapper'>
        <DocumentMeta {...meta} />
        <PageHeader data={data} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
