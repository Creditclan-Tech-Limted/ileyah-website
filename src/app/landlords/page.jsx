'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from './components/Hero'
import GetPaid from './components/GetPaid'
import FAW from '@/components/FAW'
import WePay from './components/WePay'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GetPaid />
      <WePay />
      <FAW />
      <Footer />
    </>
  )
}

export default page;