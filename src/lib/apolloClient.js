import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Connect to graphql instance on port 4000
const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql'
})

export default client
