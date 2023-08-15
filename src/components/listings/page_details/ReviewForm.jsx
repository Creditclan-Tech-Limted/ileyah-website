

import React, { useState } from 'react'

const ReviewForm = () => {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState('')
  const [email, setEmail] = useState('')
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can perform form submission or API calls here with the form data
    console.log('Submitted review:', { name, rating, email,review })
    // Reset the form after submission
    setName('')
    setRating(5)
    setReview('')
    setEmail('')
  }

  return (
    <div className='bg-gray-100 p-6  rounded-md'>
      <h2 className='text-2xl font-semibold mb-4'>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4 py-2'>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className='w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-700'
            placeholder='Your Comment...'
          />
        </div>
        <div className='mb-4 py-2'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-700'
            placeholder='Your Name'
          />
        </div>
        <div className='mb-4 py-2'>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-700'
            required
          >
            <option value='5'>5 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='2'>2 Stars</option>
            <option value='1'>1 Star</option>
          </select>
        </div>
        <div className='mb-4 py-2'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-700'
            placeholder='Your Email'
          />
        </div>
        <div className='mb-4 py-2'>
          <label className='flex items-center space-x-2 gap-2'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='form-checkbox w-4 h-4 border border-gray-400 rounded accent-blue-700 checked:border-transparent 
          checked:border-blue-700 checked:bg-blue-700 focus:outline-none'
            />
            <span className='text-gray-700 font-semibold'>
             Save my name, email, and website in this browser for the next time
              I comment
            </span>
          </label>
        </div>
        <button
          type='submit'
          className='bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-300 transition-colors duration-300'
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default ReviewForm
