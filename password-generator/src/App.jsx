import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Passwordgenerator from './Passwordgenerator';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Passwordgenerator />
    </>
  )
}

export default App
