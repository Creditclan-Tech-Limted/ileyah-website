import FAW from '@/components/FAW'
import Footer from '@/components/Footer'
import Future from '@/components/Future'
import Listings from '@/components/Listings'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import React from 'react'
import Hero from "@/components/Hero";

const LandingPage = () => {
    return (
        <>
            <Navbar />
             <Hero />
            <Products />
            <WhyUs />
            <div className="mt">
                <Listings />
            </div>
            <Future />
            <FAW />
            {/* <Achievement /> */}
            <Footer />
        </>
    )
}

export default LandingPage