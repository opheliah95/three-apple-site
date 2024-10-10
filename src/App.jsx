import React from 'react'
import {
  Navbar,
  Highlight,
  Hero,
  Model,
  Feature,
  Footer,
  HowItWorks
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
      <HowItWorks/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App)
