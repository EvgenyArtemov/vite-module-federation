import { useState } from 'react'
import './App.css'
import Button from "remoteApp/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Host Application</h1>
          <Button />
      </div>
    </>
  )
}

export default App
