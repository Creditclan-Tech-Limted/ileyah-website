import { IconBath, IconHeart, IconPlus } from "@tabler/icons-react";
import { IconBed } from "@tabler/icons-react";

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
  const [isImageBroken, setImageBroken] = useState(false);

  console.log(isImageBroken);

  const handleImageError = () => {
    console.log('error');
    setImageBroken(true);
  };
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
              src='https://creativelayers.net/themes/homez-html/images/listings/g1-2.jpg'
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
                {price} <span className='text-sm text-gray-400'>monthly</span>{' '}
              </p>
            </div>

            <div className='flex items-center pb-1 space-x-4 my-2'>
              <div className='flex space-x-3'>
                <p>
                  {' '}
                  <IconBed />{' '}
                </p>
                <p>4</p>
              </div>
              <div className='flex space-x-3'>
                <p>
                  {' '}
                  <IconBath />{' '}
                </p>
                <p>4</p>
              </div>
              <div className='flex space-x-3'>
                <p>
                  {' '}
                  <IconBath />{' '}
                </p>
                <p>1200 sqft</p>
              </div>
            </div>

            <div className='flex items-center justify-between space-x-4 border-t py-2 '>
              <div className='rounded-full py-1  text-sm'>For rent</div>
              <div className=' rounded-full  py-1  text-sm'>
                <div className='flex space-x-4'>
                  <div className='flex space-x-3'>
                    <p>
                      {' '}
                      <IconBed />{' '}
                    </p>
                  </div>
                  <div className='flex space-x-3'>
                    <p>
                      {' '}
                      <IconPlus />{' '}
                    </p>
                  </div>
                  <div className='flex space-x-3'>
                    <p>
                      {' '}
                      <IconHeart />{' '}
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
