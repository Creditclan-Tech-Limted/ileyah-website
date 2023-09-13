import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ImageSlider.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])


const img = [
  `https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg`,
  'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg',
  'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/3.jpg',
  'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/4.jpg',
  'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/5.jpg',
  'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/6.jpg',
  `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`,
]

const ImageSlider = () => {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={2}
        navigation
        //   pagination={{ clickable: true }}
        loop
        loopAdditionalSlides={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        // className='mySwiper'
        className='mySwiper swiper-container'
        observeParents={true}
      >
        {img.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
          >
            <ImageCard imageUrl={imageUrl} />
          </SwiperSlide>
        ))}
     
      </Swiper>
    </div>
  )
}

export default ImageSlider


export const ImageCard = ({imageUrl}) =>{

    return (
      <div className=''>
        <img
          src={imageUrl}
          alt='Image 1'
          className='w-full h-96 object-cover transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 '
        />
      </div>
    )
}