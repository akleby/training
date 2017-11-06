import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
// 1
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ 
    uri: 'https://api.graph.cool/simple/v1/cj9gbergr056701556s6ysp4n' 
  }),
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);

registerServiceWorker();
