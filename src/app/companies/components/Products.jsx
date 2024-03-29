import React from 'react'
import './Product.css'
import { IconHomeHand, IconHomeSearch, IconListSearch, IconRotate2 } from '@tabler/icons-react';
import Button from '@/components/global/Button';

const Products = () => {
  return (
    <>
      <div className="py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Flexible Rental Solutions for Your Employees
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-500 text-white">
                  <IconListSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Browse Listings
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Let's connect you with 10,000+ agents and landlords who fastrack your monthly tenancy.
              </p> <br />
              <Button className="mt-8" variant="outlined" color='white'>
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
                Quality of Life  
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
              Employees can choose residences that suites their preferences, contributing to an improved quality of life and overall well-being
              </p>

              <Button className="mt-8" variant="outlined" color='white'>
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
                Subscription Services
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
              Unlock a World of Convenience - Elevate Your Lifestyle with Our Subscription Services
              </p> <br />
              <Button className="mt-8" variant="outlined" color='white'>
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;