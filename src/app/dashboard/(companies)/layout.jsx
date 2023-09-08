import React from 'react'
import Sidebar from './Sidebar';

const layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] h-screen">
        <div className=''>
          <Sidebar />
        </div>
        <div className="p-8">
          <div className='max-w-7xl mx-auto pb-[100px]'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default layout;