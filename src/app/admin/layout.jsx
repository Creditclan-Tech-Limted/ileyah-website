import React from 'react'
import Sidebar from './Sidebar'

const layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-[0_1fr] lg:grid-cols-[300px_1fr] h-screen overflow-hidden">
        <div className='h-screen overflow-y-auto'>
          <Sidebar />
        </div>
        <div className="p-8 h-screen overflow-y-auto bg-gray-50">
          <div className='max-w-7xl mx-auto pb-[100px]'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default layout;