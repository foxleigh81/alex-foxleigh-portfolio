import React from 'react'
import DocumentMeta from 'react-document-meta'

// Import stylesheet
import './style.styl'
export default class Home extends React.Component {
  render () {
    // Uses the <DocumentMeta /> component to update meta tags in the <head> tag.
    const meta = {
      title: 'Home Page',
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
      <section className='t-home'>
        <DocumentMeta {...meta} />
        <h1>Yup. This is the home page</h1>
      </section>
    )
  }
}
