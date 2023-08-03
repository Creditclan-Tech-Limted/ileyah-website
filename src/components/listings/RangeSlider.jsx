import React, { useState } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const RangeSlider = ({title, minAmount, maxAmount}) => {
  const [value, setValue] = useState({ min: minAmount, max: maxAmount })

  const handleRangeChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <div className='container mx-auto p-4 '>
      <div className='border-b-2'>

      <h1 className='font-bold text-xl mb-4'> {title} </h1>
      <InputRange
        minValue={minAmount}
        maxValue={maxAmount}
        value={value}
        onChange={handleRangeChange}
        // formatLabel={(value) => `${value}`}
      />
      {/* <div className='flex justify-between mt-4'>
        <span>{value.min}%</span>
        <span>{value.max}%</span>
      </div> */}
      </div>
    </div>
  )
}

export default RangeSlider
