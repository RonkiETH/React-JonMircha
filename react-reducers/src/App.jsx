import { useState } from 'react'

import './App.css'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <Contador />
    </div>
  )
}

export default App
