import React from 'react'
import DocumentMeta from 'react-document-meta'

export default class NotFound extends React.Component {
  render () {
    // Uses the <DocumentMeta /> component to update meta tags in the <head> tag.
    const meta = {
      title: '404, not found',
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
      <section>
        <DocumentMeta {...meta} />
        <h1>Aww man! There's nothing here!</h1>
      </section>
    )
  }
}
