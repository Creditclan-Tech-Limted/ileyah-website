import { formatCurrency } from '@/lib/utils';
import { IconBath, IconBed, IconHeart, IconMapPin, IconMapPinFilled, IconMapPins } from '@tabler/icons-react'

const ListingFlex = ({ heading, price, title, houseImg, location, name, lengthNum, bedNum, bathNum, bed, bath, length, role, avatar, onClick }) => {

  console.log(houseImg);
  return (
    <div onClick={onClick}>
      <div className='max-w-sm w-full relative bg-white lg:max-w-4xl lg:flex lg:gap-4 p-4 shadow mt-4 rounded-2xl'>
        <div
          className='h-48 lg:h-64 lg:w-80 flex-none bg-cover rounded-2xl text-center overflow-hidden cursor-pointer'
          style={{ backgroundImage: `url(${houseImg[0]}) ` }}
          title='a house'
        ></div>
        <div className='w-full space-y-2 mt-6'>
          <div className='flex justify-between w-full'>
            <div className='font-bold'>{title}</div>
            <div><IconHeart size={15} /></div>
          </div>
          <div className='flex justify-between w-full'>
            <div className=''> Apartment • by <span className='text-sky-500'>Ileyah hq</span> </div>
          </div>
          <div className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <p className='cursor-pointer'>
              {location}
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='cursor-pointer'> 2 days ago </p>
          </div>

          <div className='flex space-x-4'>
            <div className="bg-sky-100 rounded-full px-6 py-1 text-sky-500 text-sm">Available</div>
            <div className="bg-red-100 rounded-full px-6 py-1 text-red-500 text-sm">For rent</div>
          </div>

          <div className="flex space-x-5 justify-between mt-4">
            <div className='flex space-x-4'>
              <div className='flex space-x-3'>
                <p> <IconBed /> </p>
                <p>{bedNum}</p>
              </div>
              <div className='flex space-x-3'>
                <p> <IconBath /> </p>
                <p>{bathNum}</p>
              </div>
            </div>
            <div className='font-bold'>
              {formatCurrency(price / 12)} / mo
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingFlex;