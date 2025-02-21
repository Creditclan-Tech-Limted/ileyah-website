"use client";

import FAW from "@/components/FAW";
import Footer from "@/components/Footer";
import Future from "@/components/Future";
// import Listings from '@/components/Listings'
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopBtn from "@/components/ScrollToTpBtn";
import Artisans from "@/components/Artisans";
import Whatsapp from "@/components/Whatsapp";
import Testimonials from "@/components/Testimonials";
import WeCall from "@/components/WeCall";
import Listings from "@/components/Listings";
import { IconX } from "@tabler/icons-react";
import FlatShareModal from "@/app/dashboard/modals/FlatShareModal";
import FlatShareLanding from "@/app/dashboard/modals/FlatShareLandingModal";

const LandingPage = () => {
  const [call, setCall] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [openFlatShareModal, setOpenFlatShareModal] = useState(false);
  const [showBox, setShowBox] = useState(true);
  const [toggleModal, setToggleModal] = useState(true);

  const handleScroll = (event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
      // if (call) return
      // setCall(true);
      // setShowModal(true);
    }
  };

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
      <WeCall isOpen={showModal} onClose={() => setShowModal(false)} />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Products call={() => setShowModal(true)} />
      <Listings />
      <Whatsapp />
      <WhyUs />
      <Artisans />
      <Future />
      <Testimonials source="main" />
      <FAW />
      <Footer />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />

      {showBox && (
        <div className="fixed bottom-0 z-50 p-4 bg-white rounded-lg h-fit shadow-lg w-80 right-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm text-gray-700">
              Sharing is saving! Find a roommate and split the rent hassle-free!
            </p>
            <button
              onClick={() => setShowBox(false)}
              className="text-black p-0.5 bg-red-500 rounded-full top-2 right-2"
            >
              <IconX size={20} />
            </button>
          </div>

          <button
            onClick={() => setOpenFlatShareModal(true)}
            style={{ animationDelay: "5s" }}
            className="w-full py-2 mt-3 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
          >
            Join waitlist now
          </button>
        </div>
      )}

      <FlatShareLanding
        setOpenFlatShareModal={setOpenFlatShareModal}
        setToggleModal={setToggleModal}
        toggleModal={toggleModal}
      />

      <FlatShareModal
        isOpen={openFlatShareModal}
        onClose={() => setOpenFlatShareModal(false)}
      />
    </>
  );
};

export default LandingPage;
