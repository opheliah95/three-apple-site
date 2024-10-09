import React from 'react'
import {
  Navbar,
  Highlight,
  Hero,
  Model,
  Feature
}  from "./components"
import * as Sentry from "@sentry/react";
const App = () => {
  return (
    
    <main className='bg-black'>
      <Navbar />
      <Hero/>
      <Highlight/>
      <Model />
      <Feature/>
    </main>
  )
}

export default Sentry.withProfiler(App)
