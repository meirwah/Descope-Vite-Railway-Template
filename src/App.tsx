import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AuthProvider } from '@descope/react-sdk'
import { Descope, SignUpOrInFlow} from '@descope/react-sdk'

const AppRoot = () => {
  return (
      <AuthProvider
          projectId="P2MgDkFpx23izEfMcbjU2wctu0Iz"
      >
       <App />
      </AuthProvider>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">

      <header className="App-header">
        <p>This is a sign up or in demo using Descope Enchanted link and Passkeys</p>
        <Descope
            flowId="sign-up-or-in"
            onSuccess={(e) => window.location.reload()}
            onError={(e) => console.log('Could not logged in')}
        />
        <p>Hello Descope + Vite + React!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.descope.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Descope Authn
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default AppRoot
