import FAW from '@/components/FAW'
import Footer from '@/components/Footer'
import Future from '@/components/Future'
// import Listings from '@/components/Listings'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import React, { useEffect, useState } from 'react'
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopBtn from "@/components/ScrollToTpBtn";
import Artisans from '@/components/Artisans'
import Whatsapp from '@/components/Whatsapp'
import Testimonials from '@/components/Testimonials'
import WeCall from '@/components/WeCall'
import classNames from 'classnames'
import Listings from '@/components/Listings'

const LandingPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [call, setCall] = useState(false)

  const handleScroll = ((event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
      // if (call) return
      // setCall(true);
      // setShowModal(true);
    }
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [call, setCall]);
  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className={classNames("main-overlay", { visible: showModal })}
      ></div>
      {showModal && (<WeCall handleToggle={() => setShowModal(false)} />)}
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Products call={() => setShowModal(true)} />
      <Listings />
      <Whatsapp />
      <WhyUs />
      <Artisans />
      <Future />
      <Testimonials source='main' />
      <FAW />
      <Footer />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </>
  )
}

export default LandingPage;