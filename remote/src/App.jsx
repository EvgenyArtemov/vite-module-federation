import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Remote Application</h1>
      </div>
    </>
  )
}

export default App
