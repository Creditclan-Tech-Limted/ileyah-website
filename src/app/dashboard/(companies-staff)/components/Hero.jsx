import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/global/Button";
import Typed from "typed.js";
import { IconChevronRight } from "@tabler/icons-react";

const Hero = ({ handleToggle }) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Employees", "Staffs", 'Tenants', "Individuals"],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  SwiperCore.use([Autoplay]);

  return (
    <div className="bg-[#F1F1F8] w-full relative z-10">
      <div className="px-4 md:px-0 py-9 md:grid grid-cols-12 pb-[70px] overflow-hidden md:relative md:z-10">
        <div className="col-span-6 col-start-2 relative flex flex-col justify-center">
          <img src="/assets/images/ileyah logo 1.png" alt="" width="200" />
          <h2 className="text-black font-dmSans leading-[1.1] mb-8 mt-[70px]">
            <span className="md:block text-[2.5rem] md:text-[4.5rem] font-bold relative text-primary">
              Providing <br /> Freedom to <br />{" "}
              <span className="text-primary-600" ref={el} /> <br /> across
              Africa.
            </span>
          </h2>
          <div className="relative flex items-center pb-[2rem] before:content-[''] before:h-full before:absolute before:top-0 before:left-[27.5px] before:z-[-1] before:w-[1px] before:bg-primary">
            <div className="step-number text-primary flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] shadow-lg bg-white">
              1
            </div>
            <div className="ml-8">
              <p className="md:text-[18px] text-[17px] text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="relative flex items-center pb-[2rem] before:content-[''] before:h-full before:absolute before:top-0 before:left-[27.5px] before:z-[-1] before:w-[1px] before:bg-primary">
            <div className="step-number text-primary flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] shadow-lg bg-white">
              2
            </div>
            <div className="ml-8">
              <p className="md:text-[18px] text-[17px] text-black">
                Lorem ipsum sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="step-number text-primary flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] shadow-lg bg-white">
              3
            </div>
            <div className="ml-8">
              <p className="md:text-[18px] text-[17px] text-black">
                Lorem ipsum dolor sit amet adipisicing.
              </p>
            </div>
          </div>
          <div className="flex z-30 pt-10">
            <Button color="black" onClick={handleToggle} rightIcon={<IconChevronRight />}>
              Continue Application
            </Button>
          </div>
        </div>
        <div className="col-span-4 col-start-8 relative m-[2rem]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              470: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              760: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  className="w-full block"
                  alt="car-gif"
                  src="/images/curve-1.png"
                />
                <div className="absolute h-[100px] w-full md:w-[250px] bottom-[1rem] md:bottom-[6rem] right-[-1rem] md:right-0">
                  <p className="md:text-[1.3rem] opacity-80 text-[17px] text-white !font-pacifico">
                    Experience peace. Pay your rent in Monthly Subscription
                    forever.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  className="w-full block"
                  alt="car-gif"
                  src="/images/curve-2.png"
                />
                <div className="absolute h-[100px] w-full md:w-[250px] bottom-[1rem] md:bottom-[6rem] right-[-1rem] md:right-0">
                  <p className="md:text-[1.7rem] opacity-80 text-[17px] text-white !font-pacifico">
                    Don't worry about <br className="md:hidden" /> Rent issues
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  className="w-full block"
                  alt="car-gif"
                  src="/images/curve-3.png"
                />
                <div className="absolute h-[100px] w-full md:w-[200px] bottom-[1rem] md:bottom-[6rem] right-[-1rem] md:right-0">
                  <p className="md:text-[1.7rem] opacity-80 text-[17px] text-white !font-pacifico">
                    With Ileyah, Rent has never been easier.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
