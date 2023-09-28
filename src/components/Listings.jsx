'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import AOS from "aos";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HousesData } from "@/utils/houseData";
import { useEffect, useRef } from "react";
import Button from "@/components/global/Button";
import Typed from "typed.js";

const Listings = () => {
  SwiperCore.use([Autoplay]);
  const el = useRef(null)


  useEffect(() => {
    AOS.init();
  }, []);

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
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-[#edeef0] hidden md:block">
      <div className="container py-20 md:py-32">
        <div className="grid md:grid-cols-3 gap-8 items-center justify-between">
          <div className="col-span-1">
            <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider text-center md:text-left">
              Browse our wide range of products
            </h5>
            <h2 className="text-3xl md:text-6xl font-bold max-w-4xl">
              Explore our rent listing, Pay <span ref={el} />
            </h2>
            <Link href='/listings' >
              <Button className="mt-8">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="col-span-2">
            <Swiper
              loop
              slidesPerView={2.7}
              spaceBetween={40}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                470: {
                  slidesPerView: 2.7,
                  spaceBetween: 20
                },
                760: {
                  slidesPerView: 2.7,
                  spaceBetween: 20
                },
                1100: {
                  slidesPerView: 2.7,
                  spaceBetween: 20
                }
              }}
              className="showcase"
            >
              <div className="swiper-pagination"></div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    HousesData.map((houses) => {
                      return (
                        <SwiperSlide key={houses.id}>
                          <div className="p-2 swiper-slide">
                            <div className="item shadow">
                              <div style={{ backgroundImage: `url(${houses.houseImgSrc})` }}
                                className="houses rounded-xl">
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
                              <div className="house-details bg-gray-100 shadow">
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
    </div>
  )
}

export default Listings
