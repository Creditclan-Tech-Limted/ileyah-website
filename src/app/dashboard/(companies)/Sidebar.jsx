'use client'
import UserInfor from '@/api/UserInfor'
import {
  IconApps,
  IconGitPullRequest,
  IconListDetails,
  IconSettings2,
  IconUser,
} from '@tabler/icons-react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    id: 1,
    link: '/dashboard/companies/',
    icon: <IconApps />,
    name: 'Dashboard',
  },
  {
    id: 2,
    link: '/dashboard/companies/staffs/',
    icon: <IconListDetails />,
    name: 'Staffs',
  },
  {
    id: 3,
    link: '/dashboard/companies/profile/',
    icon: <IconUser />,
    name: 'Profile',
  },
  {
    id: 4,
    link: '/dashboard/companies/profile/',
    icon: <IconGitPullRequest />,
    name: 'Request',
  },
  {
    id: 5,
    link: '/dashboard/companies/profile/',
    icon: <IconSettings2 />,
    name: 'Settings',
  },
]

const Sidebar = () => {
  const query = usePathname()
  let companyName = UserInfor().userName;


  return (
    <>
      <div className='w-full h-full z-40 hidden lg:block'>
        <div
          className='opacity-0 inset-0 w-full h-full'
          onClick='sidebarHandler(false)'
        ></div>
        <div className='w-[320px] absolute left-0 z-40 top-0 flex-col justify-between transition duration-150 ease-in-out h-full bg-[#00000f] text-white shadow-xl'>
          <div className='flex flex-col justify-between h-full'>
            <div className='px-6 pt-4 overflow-y-auto'>
              <div className='flex items-center justify-between'>
                <div aria-label='Home' role='img' className='flex items-center'>
                  <img
                    src='/assets/images/ileyah logo white.png'
                    alt='logo'
                    className='w-3/5 pl-5 pt-5'
                  />
                </div>
              </div>
              <div className='flex'>
                <ul className='f-m-m pl-5 mt-10'>
                  {navLinks.map((nav, i) => (
                    <Link href={nav.link} key={i}>
                      <li
                        className={classNames(
                          'px-6 py-3 rounded-full w-full',
                          query === nav?.link
                            ? 'bg-gray-200 text-black'
                            : ''
                        )}
                      >
                        <div className='flex items-center'>
                          <div className={classNames('md:w-6 md:h-6 w-5 h-5', query === nav?.link ? 'text-black' : 'text-gray-400')}>
                            {nav?.icon}
                          </div>
                          <div className={classNames('ml-10 text-lg', query === nav?.link ? 'text-black' : 'text-gray-400')} >{nav?.name}</div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className='w-full'>
              <div className='border-t border-gray-300'>
                <div className='w-full flex items-center justify-between px-6 pt-1'>
                  <div className='flex items-center'>
                    <img
                      alt='display avatar'
                      role='img'
                      src='https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png'
                      className='w-8 h-8 rounded-md'
                    />
                    <p className='text-white text-base leading-4 ml-2'>
                      {companyName}
                    </p>
                  </div>
                  <ul className='flex'>
                    <li className='cursor-pointer text-white pt-5 pb-3'>
                      <a href='javascript:void(0)'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg4.svg'
                          alt='chat'
                        />
                      </a>
                    </li>
                    <li className='cursor-pointer text-white pt-5 pb-3 pl-3'>
                      <a href='javascript:void(0)'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg5.svg'
                          alt='notifications'
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center block md:!hidden z-50'>
        <div className='grid grid-cols-3'>
          {navLinks.map((n, i) => (
            <Link
              href={n.link}
              key={i}
              className={query === n.link ? 'bg-slate-700' : ''}
            >
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

export default Sidebar
