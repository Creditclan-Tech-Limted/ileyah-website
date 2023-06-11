import { IconHomeHand, IconHomeSearch, IconRotate2 } from "@tabler/icons-react";
import Button from "./global/Button";
import useGlobalStore from "@/store/global";

const Products = () => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);

  return (
    <>
      <div className="py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          {/* <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider">
            OUR PRODUCTS
          </h5> */}
          <h2 className="text-3xl md:text-6xl font-bold max-w-4xl text-primary-500">
            Experience peace. Pay your rent monthly forever.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-500 text-white">
                  <IconHomeHand size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Find me a House
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Let's connect you with 10,000+ agents and landlords who fastrack your monthly tenancy.
              </p>
              <Button className="mt-8" onClick={toggleIsSignupOpen} variant="outlined" color='white'>
                Get started
              </Button>
            </div>
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-500 text-white">
                  <IconRotate2 size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Renew your Rent
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Rent due in a few days? We help you convert your current yearly tenancy into monthly forever.
              </p>
              <Button className="mt-8" onClick={toggleIsSignupOpen} variant="outlined" color='white'>
                Get started
              </Button>
            </div>
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-500 text-white">
                  <IconHomeSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                I have found a house
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Our houses don't suit you? You can find your own rent while we
                partner with your landlord to pay monthly forever.
              </p>
              <Button className="mt-8" onClick={toggleIsSignupOpen} variant="outlined" color='white'>
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
