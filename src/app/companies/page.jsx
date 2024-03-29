'use client'
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollToTopBtn from '@/components/ScrollToTpBtn';
import React, { useLayoutEffect, useState } from 'react'
import Hero from './components/Hero';
import Benefit from './components/Benefit';
import Footer from '@/components/Footer';
import FAW from '@/components/FAW';
import Testimonials from '@/components/Testimonials';
import Future from '@/components/Future';
import Products from './components/Products';
import Artisans from '@/components/Artisans';

const Page = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
      // setShowModal(true);
    } else {
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
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Benefit />
      <Products />
      <Artisans />
      <Future source='company' />
      <Testimonials source='company' />
      <FAW />
      <Footer />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </div>
  )
}

export default Page;