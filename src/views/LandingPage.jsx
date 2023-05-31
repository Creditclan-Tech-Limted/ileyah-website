import FAW from '@/components/FAW'
import Footer from '@/components/Footer'
import Future from '@/components/Future'
import Listings from '@/components/Listings'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import React, { useLayoutEffect, useState } from 'react'
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopBtn from "@/components/ScrollToTpBtn";
import Artisans from '@/components/Artisans'
import Whatsapp from '@/components/Whatsapp'

const LandingPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = (event) => {
    setScrollTop(event.target.scrollingElement.scrollTop);
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
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Products/>
      <Listings/>
      <Artisans/>
      <Whatsapp />
      <WhyUs/>
      <Future/>
      <FAW/>
      {/* <Achievement /> */ }
      <Footer/>
      <ScrollToTopBtn scrollTop={ scrollTop } handleScrollTop={ handleScrollTop }/>
    </>
  )
}

export default LandingPage