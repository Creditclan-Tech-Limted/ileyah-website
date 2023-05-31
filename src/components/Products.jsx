import { IconHomeHand, IconHomeSearch, IconRotate2 } from "@tabler/icons-react";

const Products = () => {
  return (
    <>
      <div className="py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider">
            OUR PRODUCTS
          </h5>
          <h2 className="text-3xl md:text-6xl font-bold max-w-4xl">
            Are you looking to rent or lease an apartment? We’ve got you covered.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-500 text-white">
                  <IconRotate2 size="32"/>
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Renew Rent
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Find an apartment in Nigeria and pay monthly, quarterly or annually. No inspection, agency or legal
                fees required. Browse from our carefully curated listings, choose a space, pay and move in.
              </p>
            </div>
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-500 text-white">
                  <IconHomeHand size="32"/>
                </div>
              </div>
              <h2 className="text-xl font-medium">
                I have found a House
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Find an apartment in Nigeria and pay monthly, quarterly or annually. No inspection, agency or legal
                fees required. Browse from our carefully curated listings, choose a space, pay and move in.
              </p>
            </div>
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-500 text-white">
                  <IconHomeSearch size="32"/>
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Find me a house
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Find an apartment in Nigeria and pay monthly, quarterly or annually. No inspection, agency or legal
                fees required. Browse from our carefully curated listings, choose a space, pay and move in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
