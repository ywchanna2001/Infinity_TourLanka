import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TravelForm from './pages/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TravelForm />
    </>
  )
}

export default App
