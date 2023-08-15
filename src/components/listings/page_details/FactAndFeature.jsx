'use-client'

import { IconBed } from '@tabler/icons-react'
import React from 'react'

const FactAndFeature = ({ name,  size, }) => {
     

  return (
    <div className='bg-white rounded-lg  p-3 my-1'>
      <div className='flex items-start gap-2'>
        <div className='flex-shrink-0'>
          <IconBed className='text-blue-700 w-10 h-10 bg-blue-300 rounded-md p-1' />
        </div>
        <div className=' '>
          <div className='flex justify-between items-center'>
            <div className=''>
              <h2 className='text-lg font-semibold'>{name}</h2>
              <div className='flex items-center'>
                <div className='flex'>{size}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactAndFeature
