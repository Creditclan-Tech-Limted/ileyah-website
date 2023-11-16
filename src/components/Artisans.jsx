'use client'
import { Artisan } from '@/utils/houseData'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from './global/Button';

const Artisans = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="py-20 md:py-32">
      <div className='container'>
        <h2 className="text-5xl md:text-6xl max-w-4xl font-bold mb-4">
          Find a House, Live Like a King.
        </h2>
        <h5 className="mb-3.5 text-primary text-left tracking-wider text-lg">
          Enjoy our complimentary/discounted house maintenance services.
        </h5>
      </div>
      <div className="mt-20">
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
              slidesPerView: 3.5,
              spaceBetween: 20
            },
            1100: {
              slidesPerView: 4.5,
              spaceBetween: 20
            }
          }}
          className="showcase"
        >
          <div className="swiper-pagination"></div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                Artisan.map((houses) => {
                  return (
                    <SwiperSlide key={houses.id}>
                      <div className="p-2 swiper-slide">
                        <div className="item h-[350px] shadow text-white">
                          <div
                            style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${houses.houseImgSrc})`,
                            }}
                            className="rounded-xl h-full bg-cover bg-no-repeat object-fit"
                          >
                            <div className="text-left text-white p-10 h-full">
                              <div>
                                <p className='text-white text-3xl font-bold'>
                                  {houses.name}
                                </p>
                                <p className="text-white text-xl mt-2">
                                  100+
                                </p>
                              </div>
                              <Button variant='outlined' color='white' size='sm' className='mt-5 transition-opacity duration-300 opacity-0 hover:opacity-100'>Get Started</Button>
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