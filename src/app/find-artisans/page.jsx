'use client'
import Artisans from '@/components/Artisans';
import FAW from '@/components/FAW';
import Footer from '@/components/Footer'
import Future from '@/components/Future';
import Navbar from '@/components/Navbar'
import ScrollToTopBtn from '@/components/ScrollToTpBtn';
import Testimonials from '@/components/Testimonials';
import { useLayoutEffect, useState } from 'react';
import Hero from './components/Hero';

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
    <Navbar />
      <Hero />
      <Artisans />
      <Future />
      <Testimonials source='landlords' />
      <FAW />
      <Footer />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </>
  )
}

export default Page;