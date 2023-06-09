import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div class="w-full h-full z-40 hidden lg:block">
        <div class="bg-gray-800 opacity-0 inset-0 fixed w-full h-full" onclick="sidebarHandler(false)"></div>
        <div class="w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
          <div class="flex flex-col justify-between h-full">
            <div class="px-6 pt-4 overflow-y-auto">
              <div class="flex items-center justify-between">
                <div aria-label="Home" role="img" class="flex items-center">
                  <img src="/assets/images/ileyah-logo.png" alt="logo" className='w-2/3 mx-auto' />
                </div>
              </div>
              <ul class="f-m-m">
                <li class="text-white pt-8">
                  <div class="flex items-center">
                    <div class="md:w-6 md:h-6 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                        <path d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z" stroke="#667EEA" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z" stroke="#667EEA" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z" stroke="#667EEA" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z" stroke="#667EEA" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <a href="javascript:void(0)" class="text-indigo-500 ml-3 text-lg">Dashboard</a>
                  </div>
                </li>
                <li class="text-gray-800 pt-8">
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <div class="md:w-6 md:h-6 w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                          <path d="M5.83333 6.66667L2.5 10L5.83333 13.3333" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M14.1667 6.66667L17.5 10L14.1667 13.3333" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.6667 3.33333L8.33333 16.6667" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <a href="javascript:void(0)" class="text-gray-800 ml-3 text-lg">Lorem Ipsum</a>
                    </div>
                    <div>
                      <button id="chevronup2" onclick="listHandler2(true)" class="ml-4 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg3.svg" alt="up" />
                      </button>
                      <button id="chevrondown2" onclick="listHandler2(false)" class="hidden ml-4 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded">
                        <img class="transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg3.svg" alt="down" />
                      </button>
                    </div>
                  </div>
                  <div id="list2" class="hidden">
                    <ul class="my-3">
                      <li class="text-sm text-indigo-500 py-2 px-6">Best Sellers</li>
                      <li class="text-sm text-gray-800 hover:text-indigo-500 py-2 px-6">Out of Stock</li>
                      <li class="text-sm text-gray-800 hover:text-indigo-500 py-2 px-6">New Products</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-full">
              <div class="flex justify-center mb-4 w-full px-6">
                <div class="relative w-full">
                  <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg2.svg" alt="search" />
                  </div>
                  <input class="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                </div>
              </div>
              <div class="border-t border-gray-300">
                <div class="w-full flex items-center justify-between px-6 pt-1">
                  <div class="flex items-center">
                    <img alt="display avatar" role="img" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" class="w-8 h-8 rounded-md" />
                    <p class="text-gray-800 text-base leading-4 ml-2">O Praise</p>
                  </div>
                  <ul class="flex">
                    <li class="cursor-pointer text-white pt-5 pb-3">
                      <a href="javascript:void(0)">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg4.svg" alt="chat" />
                      </a>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3 pl-3">
                      <a href="javascript:void(0)">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg5.svg" alt="notifications" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar