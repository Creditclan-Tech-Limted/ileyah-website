'use client'
import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import Select from '@/global/Select'
import { sectors, staff_strength } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import { useState } from 'react'

const InspectionScheduler = ({ isOpen, isClosed }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('10:00')

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time)
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={isClosed} title='Scheduler Inspection'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <div className='flex flex-col items-center p-4 mt-[120px] '>
            <h1 className='text-xl font-semibold mb-4'>
              Schedule an Inspection
            </h1>
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
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
            >
              Schedule Inspection
            </button>
          </div>
        </form>
      </Drawer>
    </>
  )
}

export default InspectionScheduler
