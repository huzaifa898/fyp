import React from 'react'
import Header from './Header'
import Hero from './Hero'
import What from './What'
import Qoutes from './Qoutes'
import Work from './Work'
import Motivation from './Motivation'
import Footer from './Footer'
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <What/>
      <Work/>
      <Qoutes/>
      <Motivation/>
      <Footer/>
    </div>
  )
}
