import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button';
import Collapsible from '@/components/global/Collapsible';
import { IconCheck, IconChevronRight, IconEdit, IconHeart, IconStar } from "@tabler/icons-react";
import CustomizePlan from '../modals/CustomizePlan';
import { useState } from 'react';
import ChoosedPlan from './ChoosedPlan';

const SuscriptionStandAlone = ({ isOpen, onClose }) => {
  const [openCustomizePlan, setOpenCustomizePlan] = useState(false);
  const [openChoosedPlan, setOpenChoosedPlan] = useState(false)
  const [plans, setPlans] = useState();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={'Subscriptions'}>
        <>
          <p className="mb-5">Please select plan a subscription services</p>
          <div className="border border-slate-300 rounded-xl">
            <Collapsible
              defaultIsOpen={true}
              header={(
                <h5 className="md:text-lg font-medium inline-flex">
                  <div className="my-auto font-bold">
                  </div>
                </h5>
              )}
              content={(
                <div className="opacity-80 pb-6 px-6">
                  <swiper-container slides-per-view='1.7' space-between='20'>
                    <swiper-slide>
                      <div className="flex h-full">
                        <div className="border-gray-200 border shadow rounded-2xl my-auto p-10 space-y-3 bg-slate-800 text-white">
                          <IconStar size={26} color="blue" className="bg-gray-200 p-1 rounded-full" />
                          <p className="font-bold">Starter</p>
                          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet elit. Asperiores, deleniti!</p>
                          <p className="text-4xl font-bold">10,000</p>
                          <p className="font-bold text-sm">What's included:</p>
                          <div className="text-white">
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Capentry Services</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Basic Fixes</span>
                            </p> <br />
                          </div>
                          <div className="mt-10">
                            <Button block className='mt-10' onClick={() => {
                              setPlans(10000);
                              setOpenChoosedPlan(true)
                            }}>Choose Plan</Button>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="flex">
                        <div className="border-gray-200 border bg-gray-100 shadow rounded-2xl my-auto p-10 space-y-3">
                          <IconHeart size={26} className="bg-gray-200 p-1 rounded-full" />
                          <p className="font-bold">Starter</p>
                          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet elit. Asperiores, deleniti!</p>
                          <p className="text-4xl font-bold">25,000</p>
                          <p className="font-bold text-sm">What's included:</p>
                          <div className="space-y-2">
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Fumigation Services (Indoor)</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Carpentry Services (Basic Fix and Door Lock Change)</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Electrical Services (Swtich box repair / Change of light switch)  </span>
                            </p>
                          </div>
                          <div className="mt-10">
                            <Button block className='mt-10' onClick={() => {
                              setPlans(25000);
                              setOpenChoosedPlan(true)
                            }}>Choose Plan</Button>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="flex">
                        <div className="border-gray-200 border shadow rounded-2xl my-auto p-10 space-y-3 bg-slate-800 text-white">
                          <IconStar size={26} color="blue" className="bg-gray-200 p-1 rounded-full" />
                          <p className="font-bold">Starter</p>
                          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet elit. Asperiores, deleniti!</p>
                          <p className="text-4xl font-bold">50,000</p>
                          <p className="font-bold text-sm">What's included:</p>
                          <div className="text-white space-y-2">
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Washing Machine Servicing / Installation</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Generator Servicing </span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Change of light switches</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">TV Installation </span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Fumigation</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Carpentry Services</span>
                            </p>
                          </div>
                          <div className="mt-10">
                            <Button block className='mt-10' onClick={() => {
                              setPlans(50000);
                              setOpenChoosedPlan(true)
                            }}>Choose Plan</Button>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="flex">
                        <div className="border-gray-200 border bg-gray-100 shadow rounded-2xl my-auto p-10 space-y-3">
                          <IconHeart size={26} className="bg-gray-200 p-1 rounded-full" />
                          <p className="font-bold">Starter</p>
                          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet elit. Asperiores, deleniti!</p>
                          <p className="text-4xl font-bold">75,000</p>
                          <p className="font-bold text-sm">What's included:</p>
                          <div className="space-y-2">
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Fumigation (Indoor)</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Carpentry Services</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Electrical Services / Installations</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Plumbing Services and repairs</span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">AC Repairs and Services  </span>
                            </p>
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">AC Gas Charging (Top Up / Complete fill up)  </span>
                            </p>
                          </div>
                          <div className="mt-10">
                            <Button block className='mt-10' onClick={() => {
                              setPlans(75000);
                              setOpenChoosedPlan(true)
                            }}>Choose Plan</Button>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="flex">
                        <div className="border-gray-200 border shadow rounded-2xl my-auto p-10 space-y-3 bg-slate-800 text-white">
                          <IconHeart size={26} className="bg-gray-200 p-1 rounded-full" />
                          <p className="font-bold">Starter</p>
                          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet elit. Asperiores, deleniti!</p>
                          <p className="text-4xl font-bold">100,000</p>
                          <p className="font-bold text-sm">What's included:</p>
                          <div className="space-y-2">
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Fumigation (Indoor & Outdoor)</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Basic home Cleaning</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Carpentry Services</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Electrical Services / Installations</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Plumbing Services and repairs</span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">AC Repairs and Services  </span>
                            </p> <br />
                            <p className="inline-flex">
                              <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">AC Gas Charging (Top Up / Complete fill up)  </span>
                            </p>
                          </div>
                          <div className="mt-10">
                            <Button block className='mt-10' onClick={() => {
                              setPlans(100000);
                              setOpenChoosedPlan(true)
                            }}>Choose Plan</Button>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper-container>
                </div>
              )}
            />
          </div>
          <div
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100 mt-10"
            onClick={() => {
              onClose()
              setOpenCustomizePlan(true)
            }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center">
                <IconEdit size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Customize Plan
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Tailor Your Package to Fit Your Needs
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
        </>
      </Drawer>
      <CustomizePlan isOpen={openCustomizePlan} onClose={() => setOpenCustomizePlan(false)} />
      <ChoosedPlan isOpen={openChoosedPlan} onClose={() => setOpenChoosedPlan(false)} plan={plans} />
    </>
  )
}

export default SuscriptionStandAlone;