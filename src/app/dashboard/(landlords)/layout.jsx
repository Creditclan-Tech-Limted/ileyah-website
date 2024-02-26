import React from 'react'
import Sidebar from '../(dashboard)/Sidebar'

const layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] h-screen overflow-hidden">
      <div className='h-screen overflow-y-auto'>
          <Sidebar />
        </div>
        <div className="p-8 h-screen overflow-y-auto">
          <div className='max-w-7xl mx-auto pb-[100px]'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default layout;