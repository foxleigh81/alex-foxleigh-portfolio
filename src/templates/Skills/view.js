import React from 'react'
import DocumentMeta from 'react-document-meta'

export default class Skills extends React.Component {
  render () {
    // Uses the <DocumentMeta /> component to update meta tags in the <head> tag.
    const meta = {
      title: 'Skills page',
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
        <h1>OMG I has mad skillz, innit!1</h1>
      </section>
    )
  }
}
