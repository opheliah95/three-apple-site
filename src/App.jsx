import React from 'react'
import {
  Navbar,
  Highlight,
  Hero,
  Model
}  from "./components"
import * as Sentry from "@sentry/react";
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

export default Sentry.withProfiler(App)
