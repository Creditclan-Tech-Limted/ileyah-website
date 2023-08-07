import React, { useState } from 'react'

const FeedbackForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can perform form submission or API calls here with the form data
    console.log('Submitted feedback:', { name, email, feedback })
    // Reset the form after submission
    setName('')
    setEmail('')
    setFeedback('')
  }

  return (
    <div className='max-w-md mx-auto bg-white p-6  rounded-md'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-4 border rounded-md focus:outline-none focus:border-orange-500'
            placeholder='Your Name*'
            required
          />
        </div>
        <div className='mb-4'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-4 border rounded-md focus:outline-none focus:border-orange-500'
            placeholder='Your Email*'
            required
          />
        </div>
        <div className='mb-4'>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className='w-full px-3 py-4 border rounded-md resize-none focus:outline-none focus:border-orange-500'
            placeholder='Your Message...'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-orange-500 text-white py-6 min-w-[300px] px-4 rounded-md hover:bg-orange-300 transition-colors duration-300'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
