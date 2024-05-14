"use client";
import Testimonials from "@/components/Testimonials";
import Features from "./Features";
import Hero from "./Hero";

const SharedContent = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <Hero />
        <Features />
        <Testimonials source='tenants' />
      </div>
    </div>
  );
};

export default SharedContent;
