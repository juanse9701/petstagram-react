import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server.juanse9701.now.sh/graphql',
  request: (operation) => {
    const token = JSON.parse(window.sessionStorage.getItem('token'))
    const autorizathion = token ? `bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization: autorizathion
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href('/')
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>, document.getElementById('app'))
