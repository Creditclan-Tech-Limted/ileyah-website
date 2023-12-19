import Drawer from '@/components/Drawer'
import { IconBath, IconBulb, IconEdit, IconPaint, IconPalette, IconPlus, IconTriangleInverted } from '@tabler/icons-react'
import classNames from 'classnames'
import React from 'react'

const artisans = [
  {
    name: 'Cleaning Services',
    icon: <IconBath size="20" />,
    desc: 'Cleaning companies offer deep cleaning services to ensure the apartment is spotless before moving in.',
    bg_color: 'bg-red-600'
  },
  {
    name: 'Plumbing Services',
    icon: <IconPaint size="20" />,
    desc: 'Plumbers can handle installation and repairs of plumbing fixtures, such as sinks, faucets, and toilets.',
    bg_color: 'bg-blue-600'
  },
  {
    name: 'Painting Services',
    icon: <IconPaint size="20" />,
    desc: 'Professional painters can refresh the interior or exterior of the apartment with a fresh coat of paint.',
    bg_color: 'bg-green-600'
  },
  {
    name: 'Electrical Services',
    icon: <IconBulb size="20" />,
    desc: 'Electricians can install or repair electrical fixtures, outlets, and wiring to ensure safety and functionality.',
    bg_color: 'bg-purple-600'
  },
  {
    name: 'Carpentry Services',
    icon: <IconTriangleInverted size="20" />,
    desc: 'Carpenters can assist with furniture assembly, repairs, and custom furniture projects',
    bg_color: 'bg-teal-600'
  },
  {
    name: 'Interior Design Services',
    icon: <IconPalette size="20" />,
    desc: 'Interior designers can assist with space planning, furniture selection, and creating a personalized living space.',
    bg_color: 'bg-black'
  }
]

const CustomizePlan = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={'Customize Plan'}>
        {
          artisans.map((item, i) => (
            <div
              className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100 mb-5"
            >
              <div>
                <div className={classNames("w-10 h-10 rounded-full text-white grid place-items-center", item.bg_color)}>
                  {item.icon}
                </div>
              </div>
              <div className="px-6">
                <p className="text-lg font-medium text-left">
                  {item.name}
                </p>
                <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                  {item.desc}
                </p>
              </div>
              <div>
                <IconPlus className="text-black" size="20" />
              </div>
            </div>

          ))
        }
      </Drawer>
    </>
  )
}

export default CustomizePlan