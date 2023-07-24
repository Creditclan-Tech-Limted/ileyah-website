import ListingFlex from '@/components/listings/ListingFlex'
import React from 'react'

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  return (
    <div>
      <div className="max-w-md rounded relative overflow-hidden shadow-lg m-auto">
        <img
          className="w-full hover:scale-110 transition duration-500 cursor-pointer"
          src={image1}
          alt="Sunset in the mountains"
        />
        <div className="absolute z-[999] top-20">
          <img
            className="w-14 h-14 border-gray-300 border-2 rounded-full mr-4"
            src={imageAvatar}
            alt="Avatar of Jonathan Reinink"
          />
        </div>
        <div className="px-6 py-4">
          <p className="text-lg uppercase  text-orange-600 ">For Rent</p>
          <div className="text-gray-900 font-bold text-2xl mb-2 hover:text-orange-600 cursor-pointer">
            New Apartment Nice View
          </div>
          <div className=" my-4 flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="text-orange-600 w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className="text-gray-700 text-base hover:text-orange-600 cursor-pointer">
              Boltimol, Chicago
            </p>
          </div>
          <div className=" my- flex items-center gap-2 text-gray-500 ">
            <p>
              <span className="font-bold text-gray-500">2 </span> bed
            </p>
            <p>
              <span className="font-bold text-gray-500">3 </span> bath
            </p>
            <p>
              <span className="font-bold text-gray-500">3450</span> {}
              Squre ft
            </p>
          </div>
        </div>
        <div className=" mx-4 my-2 mb-6 flex items-center gap-2">
          <div className=" w-10 h-10 bg-gray-200 text-gray-400 hover:bg-orange-600 cursor-pointer hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="m-auto my-2 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
              />
            </svg>
          </div>
          <div className="  w-10 h-10 bg-gray-200 text-gray-400 hover:bg-orange-600 cursor-pointer hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="m-auto my-2 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="  w-10 h-10 bg-gray-200 text-gray-400 hover:bg-orange-600 cursor-pointer hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="m-auto my-2 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <div className=" border-t-2">
          <p className="text-lg mx-4 font-bold py-6 text-orange-600 ">
            $34,900/Month{' '}
          </p>
        </div>
      </div>

      <ListingFlex
        houseImg={image1}
        heading="For Rent"
        price="$34,900/Month"
        title="New Apartment Nice View"
        avatar={imageAvatar}
        name="Jonathan Reinink"
        role="Estate Agents"
        location=" Belmore Garden, Chicago"
        lengthNum="3450"
        bedNum="3"
        bathNum="2"
        bed="Bed"
        bath="Bath"
        length="Square Ft"
      />
    </div>
  )
}

export default Page