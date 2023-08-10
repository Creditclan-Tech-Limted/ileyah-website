import React from 'react'
import { useState } from 'react'

const Checkbox = ({ label, checked, onChange, amount, descp }) => {
  return (
    <div className=' bg-white p-4'>
      {!!descp && (
        <div className='py-2 mb-4'>
          <h2 className='text-black font-bold text-xl'>{descp}</h2>
        </div>
      )}
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <label className='flex items-center space-x-2 cursor-pointer'>
            <input
              type='checkbox'
              checked={checked}
              onChange={onChange}
              className={`w-5 h-5 border border-gray-400 rounded accent-orange-600 checked:border-transparent 
          checked:border-orange-600 checked:bg-orange-600 focus:outline-none`}
            />
            <span className='font-bold text-gray-500'>{label}</span>
          </label>
        </div>
        <div className=''>
          <p className='font-bold text-gray-500'>{amount}</p>
        </div>
      </div>
    </div>
  )
}

// export default Checkbox;

const IndexPage = ({ title, label, value }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className='container mx-auto px-4'>
      <Checkbox
        label={label}
        amount={value}
        descp={title}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  )
}

export default IndexPage
