import { IconArrowDown, IconArrowUp, IconCalendar, IconCalendarBolt, IconCalendarCheck } from '@tabler/icons-react';
import React from 'react'

const Transactions = () => {
  return (
    <div>
      <div class="mt-10 bg-gray-100 shadow px-12 py-8 rounded-xl">
        <div class="text-2xl font-bold mb-6">
          Recent Transactions <span class="mx-5 border-2 rounded-full text-sm px-4 py-2">View All</span>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="flex space-x-6 space-y-4 mb-3 py-2">
          <div class="my-auto bg-gray-200 rounded-full p-2">
              <IconArrowDown color='green' size='15' />
            </div>
            <div class="flex">
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam saepe laboriosam
                  suscipit libero omnis, molestias atque odit consectetur ratione reprehenderit exercitationem
                  sapiente voluptate repellendus quasi ab quo dolorem cum!
                </div>
                <div class="mt-2 flex items-center">
                  <IconCalendarCheck size='15' className='mr-4' /> 27th Jun, 2023, 11:00PM
                </div>
              </div>
            </div>
          </div>
          <div class="flex space-x-6 space-y-4 mb-3 py-2">
            <div class="my-auto bg-gray-200 rounded-full p-2">
              <IconArrowUp color='red' size='15' />
            </div>
            <div class="flex">
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam saepe laboriosam
                  suscipit libero omnis, molestias atque odit consectetur ratione reprehenderit exercitationem
                  sapiente voluptate repellendus quasi ab quo dolorem cum!
                </div>
                <div class="mt-2 flex items-center">
                <IconCalendarCheck size='15' className='mr-4' /> 27th Jun, 2023, 11:00PM
                </div>
              </div>
            </div>
          </div>
          <div class="flex space-x-6 space-y-4 mb-3 py-2">
          <div class="my-auto bg-gray-200 rounded-full p-2">
              <IconArrowDown color='green' size='15'/>
            </div>
            <div class="flex">
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam saepe laboriosam
                  suscipit libero omnis, molestias atque odit consectetur ratione reprehenderit exercitationem
                  sapiente voluptate repellendus quasi ab quo dolorem cum!
                </div>
                <div class="mt-2 flex items-center">
                  <IconCalendarCheck size='15' className='mr-4' /> 27th Jun, 2023, 11:00PM
                </div>
              </div>
            </div>
          </div>
          <div class="flex space-x-6 space-y-4 mb-3 py-2">
          <div class="my-auto bg-gray-200 rounded-full p-2">
              <IconArrowDown color='green' size='15' />
            </div>
            <div class="flex">
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam saepe laboriosam
                  suscipit libero omnis, molestias atque odit consectetur ratione reprehenderit exercitationem
                  sapiente voluptate repellendus quasi ab quo dolorem cum!
                </div>
                <div class="mt-2 flex items-center">
                  <IconCalendarCheck size='15' className='mr-4' /> 27th Jun, 2023, 11:00PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions;