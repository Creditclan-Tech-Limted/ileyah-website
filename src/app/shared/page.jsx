"use client";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";
import SharedContent from "./components/SharedContent";
import Footer from "@/components/Footer";

const Shared = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar source />
      <SharedContent />
      <Footer />
    </div>
  );
};

export default Shared;