
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import About from './components/About'
import Timeline from './components/Timeline'
import Review from './components/Review'
import Booking from './components/Booking'
import Footer from './components/Footer'

import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <About/>
      <Timeline/>
      <Review/>
      <Booking/>
      <Footer/>
    </>
  )
}
