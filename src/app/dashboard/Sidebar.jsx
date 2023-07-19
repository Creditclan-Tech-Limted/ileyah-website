'use client'
import { IconApps, IconGitPullRequest, IconHome, IconListDetails, IconSettings, IconSettings2, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  {
    id: 1,
    link: '/dashboard/landlords',
    icon: <IconApps />,
    name: 'Dashboard'
  },
  {
    id: 2,
    link: '/dashboard/landlords/listings',
    icon: <IconListDetails />,
    name: 'Listings'
  },
  {
    id: 3,
    link: '/dashboard/landlords/profile',
    icon: <IconUser />,
    name: 'Profile'
  }
]

const Sidebar = () => {
  const query = usePathname();
  console.log(query);

  return (
    <>
      <div className="w-full h-full z-40 hidden lg:block">
        <div className="opacity-0 inset-0 w-full h-full" onClick="sidebarHandler(false)"></div>
        <div className="w-[320px] absolute left-0 z-40 top-0 shadow flex-col justify-between transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="px-6 pt-4 overflow-y-auto">
              <div className="flex items-center justify-between">
                <div aria-label="Home" role="img" className="flex items-center">
                  <img src="/assets/images/ileyah-logo.png" alt="logo" className='w-3/5 pl-5 pt-5' />
                </div>
              </div>
              <div className="flex">
                <ul className="f-m-m pl-5 mt-10">
                  <Link href='/dashboard/landlords'>
                    <li className="text-black px-6 py-3 rounded-full bg-gray-200">
                      <div className="flex items-center">
                        <div className="md:w-6 md:h-6 w-5 h-5">
                          <IconApps />
                        </div>
                        <div className="text-black ml-10 text-lg">Dashboard</div>
                      </div>
                    </li>
                  </Link>
                  {/* <Link href='/dashboard/landlords/listings'>
                    <li className="text-gray-400 px-6 py-4 rounded-full">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="md:w-6 md:h-6 w-5 h-5">
                            <IconListDetails />
                          </div>
                          <div className="text-gray-400 ml-10 text-lg">My Listings</div>
                          <div className="text-gray-400 ml-10 text-lg">My Staffs</div>
                        </div>
                      </div>
                    </li>
                  </Link> */}
                  <Link href='/dashboard/companies/staffs'>
                    <li className="text-gray-400 px-6 py-4 rounded-full">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="md:w-6 md:h-6 w-5 h-5">
                            <IconListDetails />
                          </div>
                          {/* <div className="text-gray-400 ml-10 text-lg">My Listings</div> */}
                          <div className="text-gray-400 ml-10 text-lg">My Staffs</div>
                        </div>
                      </div>
                    </li>
                  </Link>
                  <Link href='/dashboard/landlords/listings'>
                    <li className="text-gray-400 px-6 py-4 rounded-full">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="md:w-6 md:h-6 w-5 h-5">
                            <IconGitPullRequest />
                          </div>
                          {/* <div className="text-gray-400 ml-10 text-lg">My Listings</div> */}
                          <div className="text-gray-400 ml-10 text-lg">Request</div>
                        </div>
                      </div>
                    </li>
                  </Link>
                  <Link href='/dashboard/landlords/listings'>
                    <li className="text-gray-400 px-6 py-4 rounded-full">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className="md:w-6 md:h-6 w-5 h-5">
                            <IconSettings2 />
                          </div>
                          {/* <div className="text-gray-400 ml-10 text-lg">My Listings</div> */}
                          <div className="text-gray-400 ml-10 text-lg">Settings</div>
                        </div>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="border-t border-gray-300">
                <div className="w-full flex items-center justify-between px-6 pt-1">
                  <div className="flex items-center">
                    <img alt="display avatar" role="img" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                    <p className="text-white text-base leading-4 ml-2">O Praise</p>
                  </div>
                  <ul className="flex">
                    <li className="cursor-pointer text-white pt-5 pb-3">
                      <a href="javascript:void(0)">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg4.svg" alt="chat" />
                      </a>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
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

      <div className='fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center block md:!hidden'>
        <div className="grid grid-cols-3">
          {navLinks.map((n, i) => (
            <Link href={n.link} key={i}>
              <div className='flex flex-col p-6'>
                <div className='mx-auto'>{n.icon}</div>
                <div className='mx-auto'>{n.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar;