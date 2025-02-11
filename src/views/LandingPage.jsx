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
import classNames from "classnames";
import Listings from "@/components/Listings";
import { IconPlus } from "@tabler/icons-react";
import FlatShareModal from "@/app/dashboard/modals/FlatShareModal";

const LandingPage = () => {
  const [call, setCall] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [openFlatShareModal, setOpenFlatShareModal] = useState(false);

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
      <div className="relative">
        <button
          onClick={() => setOpenFlatShareModal(true)}
          className="fixed bottom-20 right-4 h-[50px] w-[50px] rounded-full p-4 flex items-center justify-canter cursor-pointer opacity-100 z-50 bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <IconPlus size={24} className="text-white" />
        </button>
      </div>

      <FlatShareModal
        isOpen={openFlatShareModal}
        onClose={() => setOpenFlatShareModal(false)}
      />
    </>
  );
};

export default LandingPage;
