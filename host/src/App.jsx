import { useState } from 'react'
import './App.css'
import Button from "remoteApp/Button"
import useStore from "remoteApp/store"

function App() {
  const [count, setCount] = useStore()

  return (
    <>
      <div>
        <h1>Host Application</h1>
          <Button />
      </div>
        <div>Current count is: {count}</div>
    </>
  )
}

export default App
