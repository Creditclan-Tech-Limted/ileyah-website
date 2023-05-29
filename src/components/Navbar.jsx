'use client'
import useGlobalStore from "@/store/global";

const Navbar = () => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);
  return (
    <>
      <nav className="bg-white border-gray-200 shadow-sm fixed w-full bg-transparent z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-4">
          <a className="flex items-center cursor-pointer">
            <img src="/assets/images/ileyah-logo.png" className="h-10 mr-3" alt="Ileyah Logo" />
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-secondary hover:bg-transparent focus:ring-4 hover:border hover:border-secondary hover:text-secondary focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"  onClick={toggleIsSignupOpen} >Get started</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-secondary rounded md:bg-transparent md:text-secondary md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;