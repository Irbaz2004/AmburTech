import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Treatments from '../Components/Treatments'
import Projects from '../Components/Projects'
import Author from '../Components/Author'
export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Author/>
      <Services/>
      <Treatments/>
      <Projects/>

    </>
  )
}
