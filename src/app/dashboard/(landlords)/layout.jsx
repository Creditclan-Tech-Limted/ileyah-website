import React from 'react'
import Sidebar from '../Sidebar'

const layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-[300px_1fr] gap-10 space-x-10  h-screen">
        <div className=''>
          <Sidebar />
        </div>
        <div className="md:mx-auto mb-20 mx-10">
          <div className="py-5">
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default layout;