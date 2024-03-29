'use client'
import FAW from '@/components/FAW'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import { IconSearch } from '@tabler/icons-react'
import Future from './components/Future'
import GetPaid from '../landlords/components/GetPaid'
import WePay from '../landlords/components/WePay'

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-800 text-white mt-[100px]'>
        <section className="relative py-32">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold lg:leading leading-normal text-6xl lg:text-8xl">Are you ready to find your dream home</h1>
                <p className="text-slate-400 mx-auto text-xl max-w-xl my-8">Find ur dream home and start paying your rent in monthly installments.</p>
                <div className="subcribe-form relative z-10">
                  <form className="relative max-w-2xl mx-auto">
                    <input type="name" id="search_name" name="name" className="rounded-full bg-white  shadow  ps-12" placeholder="City, Address, Zip :" />
                    <button type="submit" className="btnn bg-yellow-400 text-black rounded-full">Search</button>
                  </form>
                </div>
              </div>
              <div className="relative mt-8">
                <img src="/assets/images/ten.jpeg" className="rounded-xl shadow-md dark:shadow-gray-700 w-full" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <GetPaid />
      {/* <WePay /> */}
      <Future  />
      <Testimonials source='tenants' />
      <FAW />
      <Footer />
    </>
  )
}

export default Page;