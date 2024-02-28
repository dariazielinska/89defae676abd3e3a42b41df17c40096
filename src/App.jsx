import { useState } from 'react'
import './App.css'
import DataFetcher from './DataFetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataFetcher/>
    </>
  )
}

export default App
