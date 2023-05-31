'use client'
import useGlobalStore from "@/store/global";
import Button from "@/components/global/Button";
import IconButton from "@/components/global/IconButton";
import { IconMenu } from "@tabler/icons-react";

const Navbar = () => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);
  return (
    <>
      <nav className="bg-white border-gray-200 shadow-sm fixed w-full bg-transparent z-50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between mx-auto py-8">
            <a className="flex items-center cursor-pointer">
              <img src="/assets/images/ileyah-logo.png" className="h-10 mr-3" alt="Ileyah Logo"/>
            </a>
            <div className="flex md:order-2 space-x-4">
              <Button onClick={ toggleIsSignupOpen } variant="outlined">Get started</Button>
              <IconButton className="md:hidden" variant="outlined" icon={ <IconMenu/> }/>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul
                className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    className="flex py-2 pl-3 pr-4 text-white bg-secondary rounded md:bg-transparent md:text-secondary md:p-0"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0"
                  >
                    Tenants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0"
                  >
                    Find Artisans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0"
                  >
                    Landlords
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
