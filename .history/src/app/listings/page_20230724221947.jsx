import React from 'react'

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  return (
    <div>
      <div className="max-w-sm w-full bg-white lg:max-w-full lg:flex p-8 shadow-lg">
        <div
          className="h-48 lg:h-72 lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hover:scale-110 transition duration-500 cursor-pointer"
          style={{ backgroundImage: `url(${image1}) ` }}
          title="a house"
        ></div>
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="">
                <p className="text-lg uppercase  text-orange-600 ">For Rent</p>
              </div>
              <div className="">
                <p className="text-lg  text-orange-600 ">$34,900/Month</p>
              </div>
            </div>

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
                Belmore Garden, Chicago
              </p>
            </div>
            <div className=" my-4 flex items-center gap-2 text-gray-500 ">
              <p>
                <span className="font-bold text-gray-500">3</span> Bed
              </p>
              <p>
                <span className="font-bold text-gray-500">2</span> Bath
              </p>
              <p>
                <span className="font-bold text-gray-500">3450</span> Square Ft
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={imageAvatar}
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page