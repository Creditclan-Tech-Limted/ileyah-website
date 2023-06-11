'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from './components/Hero'
import GetPaid from './components/GetPaid'
import FAW from '@/components/FAW'
import WePay from './components/WePay'
import Testimonials from '@/components/Testimonials'

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GetPaid />
      <WePay />
      <Testimonials />
      <FAW />
      <Footer />
    </>
  )
}

export default Page;