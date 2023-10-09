import { formatCurrency } from "@/lib/utils";
import { IconBath, IconHeart, IconPlus } from "@tabler/icons-react";
import { IconBed } from "@tabler/icons-react";
import { useMemo, useState } from "react";

const images = [
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1942248/0651d4239ac1e6-luxury-4-bedroom-terrace-duplex-terraced-duplexes-for-sale-lekki-lagos.jpeg',
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1930496/065112d46eb232-mini-flat-24ht-light-lekki-phase-1-mini-flats-for-rent-lekki-phase-1-lekki-lagos.jpg',
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1898318/064f5f66074a65-spacious-2bedroom-flat-upstairs-with-visitors-toilets-for-rent-ajah-lagos.jpg',
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1941994/0651d22cb0f1ff-serviced-luxury-23-bedroom-apartment-in-a-serene-for-rent-lekki-phase-1-lekki-lagos.jpg',
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1941970/0651d1f1d504e4-2bedroom-flat-bq-for-rent-galadimawa-abuja.jpg',
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1940148/0651b314bb84b2-very-spacious-room-and-parlor-mini-flats-for-rent-ajah-lagos.jpg',
  'https://images.nigeriapropertycentre.com/properties/images/thumbs/1942029/0651d2867b9d13-standard-one-bedroom-apartment-mini-flats-for-rent-ajah-lagos.jpeg',
  "https://images.nigeriapropertycentre.com/properties/images/thumbs/1941982/0651d2073115ef-brand-new-mini-flat-at-abule-egba-mini-flats-for-rent-abule-egba-agege-lagos.jpg"
]

export default function ListingsGrid({
  heading,
  price,
  title,
  houseImg,
  location,
  name,
  lengthNum,
  bedNum,
  bathNum,
  bed,
  bath,
  length,
  role,
  avatar,
  url,
  property,
  onClick,
  index
}) {

  // const randomIndex = Math.floor(Math.random() * images.length);
  const [isImageBroken, setImageBroken] = useState(false);
  const handleImageError = () => {
    setImageBroken(true);
  };

  const randomIndex = useMemo(() => Math.floor(Math.random() * images.length), [])


  return (
    <>
      <div
        className='max-w-md rounded-2xl relative overflow-hidden m-auto mt-4 cursor-pointer flex flex-col border border-gray-200'
        onClick={onClick}
      >
        <div className=' bg-white'>

          {
            isImageBroken ? <img
              className='w-full transition duration-500 cursor-pointer h-[300px] object-cover rounded-2xl'
              src={images[randomIndex]}
              alt='Sunset in the mountains'
            /> :
              <img
                className='w-full transition duration-500 cursor-pointer h-[300px] object-cover rounded-2xl'
                src={houseImg}
                alt='Sunset in the mountains'
                onError={handleImageError}
              />
          }
          <div className='mt-5 p-5 '>
            <div className='text-gray-900 font-medium text-xl cursor-pointer truncate ...'>
              {title}
            </div>
            <div className='flex gap-2 items-center my-2 divide-y'>
              <p className='text-gray-700 text-base cursor-pointer'>
                {location}
              </p>
            </div>
            <div className='flex'>
              <p className='text-lg font-bold bg-white absolute bottom-60 rounded-lg p-2 '>
                {formatCurrency(price / 12)} <span className='text-sm text-gray-400'> / mo </span>{' '}
              </p>
            </div>

            <div className='flex items-center pb-1 space-x-4 my-2'>
              <div className='flex space-x-3'>
                <p>
                  {' '}
                  <IconBed />{' '}
                </p>
                <p>{bedNum || '1'}</p>
              </div>
              <div className='flex space-x-3'>
                <p>
                  {' '}
                  <IconBath />{' '}
                </p>
                <p>{bathNum || '1'}</p>
              </div>
            </div>

            <div className='flex items-center justify-between space-x-4 border-t py-2'>
              <div className='rounded-full pt-2'>For rent</div>
              <div className=' rounded-full  py-1 text-sm'>
                <div className='flex space-x-4'>
                  <div className='flex space-x-3'>
                    <p>
                      {' '}
                      <IconHeart size={20} />{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}