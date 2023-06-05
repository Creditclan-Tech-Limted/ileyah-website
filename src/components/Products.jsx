import { IconHomeHand, IconHomeSearch, IconRotate2 } from "@tabler/icons-react";

const Products = () => {
  return (
    <>
      <div className="py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          {/* <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider">
            OUR PRODUCTS
          </h5> */}
          <h2 className="text-3xl md:text-6xl font-bold max-w-4xl">
            Experience peace. Pay your rent monthly forever.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-500 text-white">
                  <IconRotate2 size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Renew Rent
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Is your rent due in a few days? Ileyah to the rescue! Chat the keyword "Renew" today and we'd be happy to assist you ease that burden. With Ileyah, bulk payments are now an issue of the past.
              </p>
            </div>
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
              Explore a wide range of real estate options, including residential, commercial, and investment properties, available on our platform. We partner with reputable real estate developers and agencies to bring you a curated selection of high-quality properties.

              </p>
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
                Contact us today to finance your rent while you pay us back in installments. Provide the full information, pictures of the property, and other required details, and we'll send a team to inspect, after which we pay and you move in. Simple as ABC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
