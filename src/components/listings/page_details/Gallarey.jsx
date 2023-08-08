import React from 'react'

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`


export default function Gallarey() {
  return (
    
    <div className='bg-white p-6 max-w-4xl rounded-md flex gap-4 items-center'>
      <div className='w-1/3  pl4'>
        <img src={image1} alt='Image 3' className='w-full h-auto rounded-md py-2' />
        <img src={image1} alt='Image 3' className='w-full h-auto rounded-md py-2' />
      </div>
      <div className='flex-col w-2/3 space-y-4'>
        <img src={image1} alt='Image 1' className='w-full h-auto rounded-md' />
      </div>
    </div>
  )
}
