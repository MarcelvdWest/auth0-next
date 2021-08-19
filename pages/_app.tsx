import '../styles/index.css'
import { TodosProvider } from '../contexts/TodosContext'
import { Auth0Provider } from '@auth0/auth0-react'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const isWindowContext = typeof window !== "undefined";
  
  return  (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN!}
      clientId={process.env.AUTH0_CLIENT_ID!}
      redirectUri={isWindowContext ?  window.location.origin : "https://localhost:3000"}
    >
      <TodosProvider>
        <div className="container mx-auto my-6 max-w-xl">
          <Component {...pageProps} />
        </div>
      </TodosProvider>
    </Auth0Provider>
  )
      
}
export default MyApp
