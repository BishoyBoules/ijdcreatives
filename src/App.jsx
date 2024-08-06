import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Search from './components/sections/Search'
import Main from './components/sections/Main'
import Welcome from './components/sections/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar/>
      <Welcome/>
      <Search/>
      <Main/>
    </React.Fragment>
  )
}

export default App
