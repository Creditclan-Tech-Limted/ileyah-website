import UserDropdown from '@/global/UserDropdown';
import React from 'react'

const DashNav = () => {
  return (
    <>
      <div className="bg-gray-800 relative pt-8 pb-10 z-10 ">
        <div className="container px-6 mx-auto flex md:flex-row items-start md:items-center justify-between">
          <div className="flex-col flex lg:flex-row items-start lg:items-center">
            <div className="ml-0 lg:ml-4 my-6 lg:my-0">
              <img src="/assets/images/ileyah logo yellow.png" alt="Logo" className="w-36" />
            </div>
          </div>
          <UserDropdown className='my-auto'/>
        </div>
      </div>
    </>
  )
}

export default DashNaviWeldone ; 