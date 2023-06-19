'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from './components/Hero'
import GetPaid from './components/GetPaid'
import FAW from '@/components/FAW'
import WePay from './components/WePay'
import Testimonials from '@/components/Testimonials'
import Future from './components/Future'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollToTopBtn from '@/components/ScrollToTpBtn'
import { useLayoutEffect, useState } from 'react'
import Whatsapp from '@/components/Whatsapp'

const Page = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
      // console.log('true');
      // setShowModal(true);
    } else {
      // console.log('failse');
      // setShowModal(false);
    }
  };
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      {/* <GetPaid /> */}
      <WePay />
      <Whatsapp source='landlord' />
      <Future />
      <Testimonials source='landlords'/>
      <FAW />
      <Footer />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />

    </>
  )
}

export default Page;