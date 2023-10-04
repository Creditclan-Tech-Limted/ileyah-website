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
}) {
  return (
    <>
      <div
        className='max-w-md rounded-2xl relative overflow-hidden m-auto mt-4 cursor-pointer flex flex-col border border-gray-200'
        onClick={onClick}
      >
        <div className=' bg-white'>
          <img
            className='w-full transition duration-500 cursor-pointer h-[300px] object-cover rounded-2xl'
            src={houseImg}
            alt='Sunset in the mountains'
          />
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
              <p className='text-lg font-bold bg-white absolute bottom-40 rounded-lg p-2 '>
                {price} <span className='text-sm text-gray-400'>monthly</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
