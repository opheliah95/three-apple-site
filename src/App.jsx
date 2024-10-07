import React from 'react'
import {
  Navbar,
  Highlight,
  Hero
}  from "./components"
const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero/>
      <Highlight/>
    </main>
  )
}

export default App
