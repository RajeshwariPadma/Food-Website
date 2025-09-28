import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
       <AuthProvider>
      <App />
    </AuthProvider>
    </ApolloProvider>
   </StrictMode>
)
