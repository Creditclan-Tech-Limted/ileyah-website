'use client'

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'

export default function InspectionScheduler() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('10:00')

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time)
  }

  return (
    <div className="">
      <Navbar />
      <div className='flex flex-col items-center p-4 mt-[120px] '>
        <h1 className='text-xl font-semibold mb-4'>Schedule an Inspection</h1>
        <div className='mb-4 '>
          <label htmlFor='inspection-date' className='block font-medium'>
            Select a Date:
          </label>
          <DatePicker
            id='inspection-date'
            selected={selectedDate}
            onChange={handleDateChange}
            className='block min-w-[300px] max-w-lg  p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='inspection-time' className='block font-medium'>
            Select a Time:
          </label>
          <TimePicker
            id='inspection-time'
            value={selectedTime}
            onChange={handleTimeChange}
            className='block min-w-[300px] max-w-lg p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          />
        </div>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'>
          Schedule Inspection
        </button>
      </div>
    </div>
  )
}
