import React, { useState } from 'react'

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex items-center space-x-2 gap-2'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='form-checkbox w-5 h-5 border border-gray-400 rounded accent-blue-700 checked:border-transparent 
          checked:border-blue-700 checked:bg-blue-700 focus:outline-none'
      />
      <span className='text-gray-700 font-semibold'>{label}</span>
    </label>
  )
}

export default Checkbox
