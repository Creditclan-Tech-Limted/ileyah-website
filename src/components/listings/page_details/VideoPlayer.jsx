import React, { useRef, useState } from 'react'

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='relative'>
      <video
        ref={videoRef}
        src={videoSrc}
        className='w-full rounded-md'
        controls
      ></video>
      <button
        onClick={togglePlay}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 cursor-pointer'
      >
        {isPlaying ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 12 6 6v12z'
            ></path>
          </svg>
        )}
      </button>
    </div>
  )
}

export default VideoPlayer
