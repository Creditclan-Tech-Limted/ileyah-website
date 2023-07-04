import { IconApps, IconListDetails } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div class="w-full h-full z-40 hidden lg:block">
        <div class=" opacity-0 inset-0 w-full h-full" onclick="sidebarHandler(false)"></div>
        <div class="w-[320px] absolute left-0 z-40 top-0 shadow flex-col justify-between transition duration-150 ease-in-out h-full">
          <div class="flex flex-col justify-between h-full">
            <div class="px-6 pt-4 overflow-y-auto">
              <div class="flex items-center justify-between">
                <div aria-label="Home" role="img" class="flex items-center">
                  <img src="/assets/images/ileyah-logo.png" alt="logo" className='w-3/5 pl-5 pt-5' />
                </div>
              </div>
              <div className="flex">
                <ul class="f-m-m pl-5 mt-10">
                  <Link href='/dashboard/landlords'>
                    <li class="text-black px-6 py-3 rounded-full bg-gray-200">
                      <div class="flex items-center">
                        <div class="md:w-6 md:h-6 w-5 h-5">
                          <IconApps />
                        </div>
                        <div class="text-black ml-10 text-lg">Dashboard</div>
                      </div>
                    </li>
                  </Link>
                  <Link href='/dashboard/landlords/listings'>
                    <li class="text-black px-6 py-4 rounded-full">
                      <div class="flex items-center">
                        <div class="flex items-center">
                          <div class="md:w-6 md:h-6 w-5 h-5">
                            <IconListDetails />
                          </div>
                          <div class="text-black ml-10 text-lg">My Listings</div>
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
                          <li class="text-sm text-white py-2 px-6">Best Sellers</li>
                          <li class="text-sm text-gray-800 hover:text-white py-2 px-6">Out of Stock</li>
                          <li class="text-sm text-gray-800 hover:text-white py-2 px-6">New Products</li>
                        </ul>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div class="w-full">
              <div class="border-t border-gray-300">
                <div class="w-full flex items-center justify-between px-6 pt-1">
                  <div class="flex items-center">
                    <img alt="display avatar" role="img" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" class="w-8 h-8 rounded-md" />
                    <p class="text-white text-base leading-4 ml-2">O Praise</p>
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