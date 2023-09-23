import { useState } from 'react'
import { IconMapPinFilled } from '@tabler/icons-react'
import ProDetails from './modals/ProDetails'
// import ProDetails from './modals/property_details'

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
  property
}) {

  const [openPropertyDetails, setOpenPropertyDetails] = useState(false)

  const handleClose = async () => {
    try {
      setOpenPropertyDetails(false)
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <div className='max-w-md rounded relative overflow-hidden shadow m-auto mt-4 cursor-pointer h-[400px] flex flex-col' onClick={() => setOpenPropertyDetails(true)}>
        <div>
          <img
            className='w-full hover:scale-110 transition duration-500 cursor-pointer h-[200px] object-cover'
            src={houseImg}
            alt='Sunset in the mountains'
          />
          <div className='absolute z-[9] top-3 left-3 bg-green-600 text-white rounded px-4 py-1'>
            Rent
          </div>
          <div className='p-4 space-y-3'>
            <div className='text-gray-900 font-bold text-2xl hover:text-blue-700 cursor-pointer'>
              {title}
            </div>
            <div className='flex gap-2 items-center'>
              <IconMapPinFilled size="15" />
              <p className='text-gray-700 text-base hover:text-blue-700 cursor-pointer'>
                {location}
              </p>
            </div>
            <p>{property?.area} - {property?.createdAt?.slice(0, 10)} </p>
          </div>
        </div>
        <div className='border-t-2 my-auto'>
          <p className='text-lg px-8 font-bold'>{price}</p>
        </div>
      </div>

      <ProDetails isOpen={openPropertyDetails} onClose={handleClose} property={property} />
    </>
  )
}