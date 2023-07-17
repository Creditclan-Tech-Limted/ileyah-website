'use client'
import Button from '@/components/global/Button'
import { IconBed, IconHeartFilled, IconMapPinFilled, IconPlus, IconToiletPaper } from '@tabler/icons-react'

const Page = () => {
  return (
    <>
      <div className='h-full'>
        <div className='flex justify-between'>
          <div>
            <div className='text-4xl'>
              Welcome, Landlord 👋🏿
            </div>
            <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, corporis </p>
          </div>
          <div>
            <Button size='sm' leftIcon={<IconPlus />} >New Property</Button>
          </div>
        </div>

        <div className='mt-10 mb-10'>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl flex justify-between'>
                  <div className='text-black'>$300.99</div>
                  <div className='bg-red-100 p-2 rounded-full'><IconHeartFilled size='15' className='text-red-500' /></div>
                </p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-red-500 w-[50px] text-center text-white rounded-xl">
                  Sell
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl text'>$234.90</p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl text'>$234.90</p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl text'>$234.90</p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl flex justify-between'>
                  <div className='text-black'>$300.99</div>
                  <div className='bg-red-100 p-2 rounded-full'><IconHeartFilled size='15' className='text-red-500' /></div>
                </p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-red-500 w-[50px] text-center text-white rounded-xl">
                  Sell
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl text'>$234.90</p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl text'>$234.90</p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
            <div className=' bg-white shadow-lg rounded-xl p-1'>
              <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(/assets/images/05.jpg)`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl text'>$234.90</p>
                <p className='font-bold'>The Mainland Estate</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                <hr />
                <p className='flex justify-between'>
                  <div className='inline-flex'><IconToiletPaper /> 2 Bathrooms</div>
                  <div className='inline-flex'><IconBed /> 4 Bedrooms</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page