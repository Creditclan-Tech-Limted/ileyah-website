'use client'
import Navbar from '@/app/listings/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import ListingFlex from '@/components/listings/ListingFlex';
import ProDetails from '@/components/listings/modals/property_details';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use';

const page = () => {
  const router = useRouter();
  const query = usePathname();
  const [listings, setListings] = useState([])
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [current, setCurrent] = useState()
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false)

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
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis illum, animi quis quos odit quae illo, deleniti in ducimus aut aliquid provident numquam nostrum natus iure neque, rerum cupiditate quidem.
            </div>
          </div>
        </div>
      </div>

      <ProDetails isOpen={openPropertyDetails} onClose={() => setOpenPropertyDetails(false)} property={current} />
    </>
  )
}

export default page