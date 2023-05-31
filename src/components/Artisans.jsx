'use client'
import { Artisan } from '@/utils/houseData'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Artisans = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="py-20 md:py-32">
      <div className='container'>
        <h2 className="text-3xl md:text-6xl max-w-4xl font-bold mb-4">
          We partnered thousands of trusted artisans to support you.
        </h2>
      </div>
      <div className="mt-20">
        <Swiper
          loop
          slidesPerView={ 1.5 }
          spaceBetween={ 40 }
          speed={ 10000 }
          autoplay={ {
            delay: 0,
            disableOnInteraction: false,
          } }
          breakpoints={ {
            470: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            760: {
              slidesPerView: 3.5,
              spaceBetween: 20
            },
            1100: {
              slidesPerView: 4.5,
              spaceBetween: 20
            }
          } }
          className="showcase"
        >
          <div className="swiper-pagination"></div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                Artisan.map((houses) => {
                  return (
                    <SwiperSlide key={ houses.id }>
                      <div className="p-2 swiper-slide">
                        <div className="item h-[350px] shadow text-white">
                          <div
                            style={ {
                              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${ houses.houseImgSrc })`,
                            } }
                            className="rounded-xl h-full bg-cover"
                          >
                            <div className="text-left text-white p-10 h-full">
                              <p className='text-white text-3xl font-bold'>
                                { houses.name }
                              </p>
                              <p className="text-white text-xl mt-2">
                                1000+
                              </p>
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
  )
}

export default Artisans;
