import { useState } from 'react'

import './App.css'
import { AddProduct } from './components/example-formik'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddProduct/>
    </>
  )
}

export default App
