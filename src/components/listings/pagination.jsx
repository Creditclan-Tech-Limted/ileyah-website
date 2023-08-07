import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`mx-1 px-3 py-1 rounded-lg cursor-pointer font-semibold text-lg ${
            currentPage === i
              ? 'bg-orange-600 text-white'
              : 'bg-white text-gray-600 hover:bg-orange-200'
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      )
    }
    return pageNumbers
  }

  return (
    <div className='flex justify-center mt-4'>
      <ul className='flex space-x-1'>
        {currentPage > 1 && (
          <li
            className='mx-1 px-3 py-1 rounded-lg cursor-pointer bg-white text-orange-600 hover:bg-orange-200'
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </li>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <li
            className='mx-1 px-3 py-1 rounded-lg cursor-pointer bg-white text-orange-600 hover:bg-orange-200'
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination
