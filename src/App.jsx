import React from 'react'
import {
  Navbar,
  Highlight,
  Hero,
  Model
}  from "./components"
const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero/>
      <Highlight/>
      <Model />
    </main>
  )
}

export default App
