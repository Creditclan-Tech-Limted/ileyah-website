'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import AOS from "aos";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HousesData } from "@/utils/houseData";
import { useEffect, useRef } from "react";

const Listings = () => {
  SwiperCore.use([Autoplay]);
  const el = useRef(null);
  useEffect(() => {
    AOS.init();
  }, [])

  let today = new Date()
  return (
    <>
      <div className=" max-w-7xl mx-auto mb-[80px] mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          <div className="">
            <h5 className="uppercase md:text-sm text-sm mb-3.5 text-blue-800 font-semibold text-center md:text-left">
              LISTINGS
            </h5>
            <div className="flex justify-between flex-wrap md:mb-16 mb-14">
              <h2 className="md:text-4xl text-3xl text-black font-bold w-full md:max-w-md  text-center md:text-left mb-5">
                Quality apartments. Trusted by millions of renters.
              </h2>
            </div>
            <button className="btn hidden md:block cta shadow bg-blue-800 text-white">
              Get Started
            </button>
          </div>
          <div className="">
            <Swiper
              loop
              slidesPerView={1.5}
              spaceBetween={40}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                470: {
                  slidesPerView: 1.5,
                  spaceBetween: 20
                },
                760: {
                  slidesPerView: 1.5,
                  spaceBetween: 20
                },
                1100: {
                  slidesPerView: 1.5,
                  spaceBetween: 20
                }
              }
              }
              className="showcase">
              <div className="swiper-pagination"></div>
              <div className="swiper-container">
                <div className="swiper-wrapper">

                  {
                    HousesData.map((houses) => {
                      return (
                        <SwiperSlide key={houses.id}>
                          <div className="p-2 swiper-slide">
                            <div className="item">
                              <div style={{ backgroundImage: `url(${houses.houseImgSrc})` }} className="houses">
                                <div className="loved">
                                  <span><i className="fa-solid fa-heart"></i></span>
                                </div>
                                <div className="profile flex">
                                  <div className="img">
                                    <img src={houses.imgSrc} alt="" srcSet={houses.imgSrc} />
                                  </div>
                                  <div className="name">
                                    {houses.name}
                                  </div>
                                </div>
                              </div>
                              <div className="house-details">
                                <h3 className="pt-3">₦{houses.price}<span>/month</span></h3>
                                <h5>
                                  <span><i className="fa-solid fa-location-dot mr-1"></i></span>{houses.location}
                                </h5>
                                <div className="flex justify-between features mt-3">
                                  <div className="beds mr-3">
                                    <i className="fa-solid fa-bed mr-1"></i>
                                    {houses.bedrooms}
                                  </div>
                                  <div className="bathrooms mr-3">
                                    <i className="fa-solid fa-bath mr-1"></i>
                                    {houses.bathrooms}
                                  </div>
                                  <div className="toilets mr-3">
                                    <i className="fa-solid fa-toilet mr-1"></i>
                                    {houses.toilets}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listings