import { useState } from 'react'

const DropdownSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative inline-block">
      <input
        type="text"
        className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
        placeholder="Search..."
        onChange={handleInputChange}
        onFocus={toggleDropdown}
        onBlur={toggleDropdown}
        value={searchTerm}
      />
      {isOpen && (
        <ul className="absolute z-10 w-64 mt-2 py-2 bg-white border rounded-lg shadow-lg">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setSearchTerm(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownSearch
