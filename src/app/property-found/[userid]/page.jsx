'use client'
import Navbar from '@/app/listings/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import Button from '@/components/global/Button';
import ListingFlex from '@/components/listings/ListingFlex';
import ProDetails from '@/components/listings/modals/property_details';
import { IconChevronRight, IconHome2 } from '@tabler/icons-react';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use';
import Typed from 'typed.js';

const Page = () => {
  const router = useRouter();
  const query = usePathname();
  const [listings, setListings] = useState([])
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [current, setCurrent] = useState()
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);
  const el = useRef(null)

  useIsomorphicLayoutEffect(() => {
    if (isMobileNavVisible) document.scrollingElement.style.overflowY = 'hidden';
    else document.scrollingElement.style.overflowY = 'initial';
  }, [isMobileNavVisible]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    setScrolled(scrollTop > 50);
  };

  const getHouses = async () => {
    try {
      const res = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/getAllFoundHouse', {
        request_id: query.split('/')[2]
      })

      let newData = res?.data.map((item) => {
        console.log({ item });
        const parsedImages = JSON.parse(item.image);
        // Return the parsed data for the item
        return { ...item, image: parsedImages };
      })

      console.log({ newData });

      setListings(newData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHouses()
  }, [])

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Monthly', 'Weekly'],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className='bg-gray-100'>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <div className={`grid grid-cols-[1fr_350px] gap-10 mt-10`}>
            <div className=''>
              {listings.map((m, i) => (
                <div key={i}>
                  <ListingFlex
                    key={i}
                    index={i}
                    houseImg={m.image}
                    heading='For Rent'
                    price={m?.price}
                    title={m?.description}
                    name='Jonathan Reinink'
                    role='Estate Agents'
                    location={m?.address}
                    lengthNum='3450'
                    bedNum={m?.bed || '2'}
                    bathNum={m?.bath || '2'}
                    bed='Bed'
                    bath='Bath'
                    length='Square Ft'
                    property={m}
                    onClick={() => {
                      setCurrent(m)
                      setOpenPropertyDetails(true)
                    }}
                  />
                </div>
              ))}
            </div>
            <div className='mt-5'>
              <div className='hidden md:block'>
                <div className='bg-blue-600 rounded-xl p-4 inline-flex w-full'>
                  <IconHome2 color='white' />
                  <p className='text-white mx-5'>
                    Claim Your <span className='font-bold'>SIGNUP</span> Bonus{' '}
                  </p>
                </div>
                <div className='mt-3 bg-white shadow rounded-lg pl-10 pr-10 pt-10 text-xl h-[350px] relative border'>
                  <p className='text-4xl font-medium'>
                    Experience peace. Pay your rent <span className="text-primary-600" ref={el} /> forever.{' '}
                  </p>
                  <img
                    src='/assets/images/house-svg.png'
                    alt='Image'
                    className='absolute bottom-0 right-0 w-32 h-32'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProDetails isOpen={openPropertyDetails} onClose={() => setOpenPropertyDetails(false)} property={current} />
    </>
  )
}

export default Page;