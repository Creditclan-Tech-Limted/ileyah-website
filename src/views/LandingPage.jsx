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
import WeCall from '@/components/WeCall'
import classNames from 'classnames'

const LandingPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState({
    status: false,
    isOpened: false,
  });
  const [call, setCall] = useState(false)

  const handleScroll = (event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
      console.log(showModal);
      if (!showModal.isOpened && !showModal.status) {
        console.log('true');
        setShowModal({ status: true, isOpened: true });
      }
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
      {
        showModal.status && (
          <div id="flamelab-convo-widget">
            <img src="/assets/images/avatar.png" alt="Avatar Image" />
            <div class="flamelab-cw-msg-box">
              <span>Hey 🥳   Want us to call you?</span>
              <div class="flamelab-cw-buttons">
                <div class="flamelab-cw-button flamelab-cw-button-yes" onClick={() => setCall(true)}>Yes!</div>
                <div class="flamelab-cw-button flamelab-cw-button-no">No thanks</div>
              </div>
            </div>
          </div>
        )
      }
      <div
        onClick={() => setCall(false)}
        className={classNames("main-overlay", { visible: call })}
      ></div>
      {call && (<WeCall handleToggle={() => setCall(false)} />)}
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
