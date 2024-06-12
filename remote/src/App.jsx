import useStore from './store.js'
import './App.css'

import Button from './Button.jsx'

function App() {
  const [count, setCount] = useStore()

  return (
    <>
      <div>
          <h1>Remote Application</h1>
          <Button />
      </div>
        <div>Current count is: {count}</div>
    </>
  )
}

export default App
