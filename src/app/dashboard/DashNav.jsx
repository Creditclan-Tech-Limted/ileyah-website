import React from 'react'

const DashNav = () => {
  return (
    <>
      <div className="bg-gray-800 relative pt-8 pb-10 z-10 ">
        <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="flex-col flex lg:flex-row items-start lg:items-center">
            <div className="ml-0 lg:ml-4 my-6 lg:my-0">
              <h4 className="text-3xl font-bold leading-tight text-white mb-2">Dashboard</h4>
            </div>
          </div>
          <div className="flex items-center">
            <img role="img" className="border-2 shadow border-gray-600 rounded-full mr-3" src="https://cdn.tuk.dev/assets/webapp/master_layouts/boxed_layout/boxed_layout2.jpg" alt="Display Avatar of Andres Berlin" />
            <div>
              <p className="text-sm text-white leading-4 mb-1">Oyegbile Praise</p>
              <p className="text-xs text-gray-400 leading-4">09039719017</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashNav;