import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const floorImage = `https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/10.png`

export default function FloorPlan() {
  let [categories] = useState({
    'First Floor': [
      {
        id: 1,
        title: 'First Floor',
        des: `Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.`,
        imageUrl: floorImage,
      },
    ],
    'Second Floor': [
      {
        id: 1,
        title: 'Second Floor ',
        des: `Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.`,

        imageUrl: floorImage,
      },
    ],
    'Third Floor': [
      {
        id: 1,
        title: 'Third Floor',
        des: `Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.`,

        imageUrl: floorImage,
      },
    ],
    'Top Garden': [
      {
        id: 1,
        title: 'Top Garden',
        des: `Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.`,
        imageUrl: floorImage,
      },
    ],
  })

  return (
    <div className='w-full max-w-4xl px-2  sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-600',
                  'ring-white ring-opacity-60 ring-offset-2 ring-orange-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-orange-600 shadow text-white'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-red-600'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className='relative grid grid-cols-2  gap-4 items-center justify-between rounded-md p-3 hover:bg-gray-100'
                  >
                    <div className=''>
                      <img
                        alt={post.title}
                        src={post.imageUrl}
                        className='w-full h-'
                      />
                    </div>
                    <div className=''>
                      <h1 className='mt-1 text-3xl font-bold text-gray-900 truncate'>
                        {post.title}
                      </h1>
                      <p className='mt-1 text-md text-gray-500  max-w-xl'>
                        {post.des}
                      </p>
                    </div>
                  </div>
                ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
