import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AuthProvider, useAuth } from '@descope/react-sdk'
import { Descope, SignUpOrInFlow} from '@descope/react-sdk'

const AppRoot = () => {
  return (
      <AuthProvider
          projectId="P2L5rJfqvUOTIQ1zhMss2fqJdhoV"
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
        <img src={logo} className="App-logo" alt="logo" />
        <Descope
            flowId="sign-up-or-in"
            onSuccess={(e) => window.location.reload()}
            onError={(e) => console.log('Could not logged in')}
        />
        <p>Hello Descope + Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
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
