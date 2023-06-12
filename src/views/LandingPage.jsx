import FAW from '@/components/FAW'
import Footer from '@/components/Footer'
import Future from '@/components/Future'
// import Listings from '@/components/Listings'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import React, { useLayoutEffect, useState } from 'react'
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopBtn from "@/components/ScrollToTpBtn";
import Artisans from '@/components/Artisans'
import Whatsapp from '@/components/Whatsapp'
import Testimonials from '@/components/Testimonials'
import Call from '@/components/Call'

const LandingPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState({
    status: false,
    isOpened: false,
  });

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
      {/* <Call /> */}
      <div id="flamelab-convo-widget">
        <img src="/assets/images/avatar.png" alt="Avatar Image" />
        <div class="flamelab-cw-msg-box">
          <span>Hey! Do you want us to call you?</span>
          <div class="flamelab-cw-buttons">
            <div class="flamelab-cw-button flamelab-cw-button-yes">Yes!</div>
            <div class="flamelab-cw-button flamelab-cw-button-no">No thanks</div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Products />
      <Whatsapp />
      <WhyUs />
      <Artisans />
      {/* <Listings/> */}
      <Future />
      <Testimonials source='main' />
      <FAW />
      {/* <Achievement /> */}
      <Footer />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </>
  )
}

export default LandingPage
