import Drawer from "@/components/Drawer"
import Button from "@/components/global/Button";
import { useToast } from "@/lib/use-toast";
import { HousesData } from "@/utils/houseData";
import { IconBath, IconBulb, IconBus, IconCheck, IconHeart, IconPaint, IconPalette, IconPlus, IconStar, IconTriangleInverted, IconX } from "@tabler/icons-react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle';
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import Collapsible from "@/components/global/Collapsible";
import useSignupStore from "@/store/signup";
import { useForm } from "react-hook-form";
import Input from "@/global/Input";
import Select from "@/global/Select";
register();

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

const house_types = [
  { value: 'room-only', text: 'Room only' },
  { value: 'room-parlour', text: 'Room and parlour' },
  { value: 'two-bedroom', text: 'Two bedroom' },
  { value: 'three-bedroom', text: 'Three bedroom' },
  { value: 'four-bedroom', text: 'Four bedroom' },
  { value: 'bungalow', text: 'Bungalow' },
  { value: 'duplex', text: 'Duplex' },
];

const Plans = ({ isOpen, onClose, property, onNext }) => {
  const array = [];
  const toast = useToast();
  const router = useRouter();
  const [plans, setPlans] = useState()
  const [views, setViews] = useState('charges')
  const { data, updateData } = useSignupStore((state) => state);
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const add = async (item) => {
    try {
      toast.success(`${item?.name} has been added`)
      array.push(item?.name)
      console.log(array);
    } catch (error) {
      console.log(error);
    }
  }

  const signUp = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      console.log(ileyah_token);
      if (ileyah_token) {
        if (data?.user?.credit_score) {
          return onNext();
        }
        updateData({ user: ileyah_token, property })
        return router.push(`/dashboard`);
      } else {
        return router.push(`/register`)
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const scheduleInspections = async () => {
    try {
      console.log({property});
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      if (ileyah_token) {
        updateData({ user: ileyah_token, property });
        return onNext();
      } else {
        updateData({ user: ileyah_token, property });
        return router.push(`/register`)
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const onSubmit = async (values) => {
    // const res = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/createFindHouse', { ...values, landlordAgentId: data?.user.id });
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} smLonger={true}>

        <>
          {
            views === 'charges' && (
              <>
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-semibold">Charges</h3>
                  <Button
                    onClick={onClose} rounded icon={<IconX size="20" />}
                    size="sm" color="red" variant="outlined"
                  > <IconX /> </Button>
                </div>
                <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">Note!</span> Please note the amount below is subject to increase or decrease.
                  </div>
                </div>

                <div className="border border-gray-300 p-5 rounded-2xl">
                  <div className="text-3xl font-bold">
                    {formatCurrency(property.price * 0.42)}
                  </div>
                  <div className="mt-6">
                    The above amount is to be paid as (Agreement | Commision | Security Charges) to the Landlord / Agents of the property!
                  </div>
                </div>

                <div className="mt-10">
                  <Button color='black' onClick={() => setViews('plans')} >Accept and Continue</Button>
                </div>
              </>
            )
          }
        </>

        <>
          {
            views === 'plans' && (
              <>
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-semibold">Choose Plan</h3>
                  <Button
                    onClick={onClose} rounded icon={<IconX size="20" />}
                    size="sm" color="red" variant="outlined"
                  > <IconX /> </Button>
                </div>
                <p>Your Monthly Repayment is <span className="font-bold">{formatCurrency(property.price / 12)}</span> /mo</p>
                <p className="mb-5">Please select plan a subscription services</p>
                <div className="border border-slate-300 rounded-xl">
                  <Collapsible
                    defaultIsOpen={true}
                    header={(
                      <h5 className="md:text-lg font-medium inline-flex">
                        <div className="my-auto font-bold">
                          <span>
                            Move in Service
                          </span>
                        </div>
                      </h5>
                    )}
                    content={(
                      <div className="opacity-80 pb-6 px-6">
                        <swiper-container slides-per-view='1.7' space-between='20' >
                          <swiper-slide>
                            <div className="flex">
                              <div className="border-green-500 border shadow rounded-2xl my-auto p-10 space-y-3 h-full w-full">
                                <IconHeart size={26} className="bg-gray-200 p-1 rounded-full" />
                                <p className="text-4xl font-bold">No Plans</p>
                                <div className="mt-auto">
                                  <Button block className='mt-10' onClick={() => {
                                    setPlans(5000);
                                    setViews('details')
                                  }}>Continue</Button>
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
                                    setViews('details')
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
                                    setViews('details')
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
                                    setViews('details')
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
                                    setPlans(100000);
                                    setViews('details')
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
                                    setViews('details')
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
              </>
            )
          }

          {
            views === 'vehicle-movement' && (
              <>
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-semibold">Vehicle Movement</h3>
                  <Button
                    onClick={() => setViews('plans')} rounded icon={<IconX size="20" />}
                    size="sm" color="red" variant="outlined"
                  > <IconX /> </Button>
                </div>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div className="space-y-3">
                      <div>
                        <p>Moving From</p>
                        <div className="border-2 mt-3 border-gray-300 p-5 rounded-2xl space-y-10 border-dashed">
                          <Input
                            type='text'
                            label='Area'
                            bordered
                            {...register('area', {
                              required: {
                                value: true,
                                message: 'Area is required',
                              },
                            })}
                            error={errors?.area?.message}
                          />

                          <Select
                            options={house_types} label='House Type' bordered
                            {...register('house_types', {
                              required: {
                                value: true,
                                message: 'House Type is required'
                              }
                            })}
                            error={errors?.house_types?.message}
                          />
                        </div>
                      </div>
                      <div>
                        <p>Moving To</p>
                        <div className="border-2 border-gray-300 p-5 rounded-2xl space-y-10 border-dashed mt-3">
                          <Input
                            type='text'
                            label='Area'
                            bordered
                            {...register('area', {
                              required: {
                                value: true,
                                message: 'Area is required',
                              },
                            })}
                            error={errors?.area?.message}
                          />

                          <Select
                            options={house_types} label='House Type' bordered
                            {...register('house_types', {
                              required: {
                                value: true,
                                message: 'House Type is required'
                              }
                            })}
                            error={errors?.house_types?.message}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-10">
                      <Button color='black' type='submit'> Get Total </Button>
                      <Button variant='outlined' onClick={() => setViews('details')} > Skip </Button>
                    </div>
                  </form>
                </div>

              </>
            )
          }

          {
            views === 'details' && (
              <>
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-semibold">Summary</h3>
                  <Button
                    onClick={onClose} rounded icon={<IconX size="20" />}
                    size="sm" color="red" variant="outlined"
                  > <IconX /> </Button>
                </div>
                <p className="mb-3">Below is the ...</p>
                <div className="border border-gray-300 divide-y rounded-xl">
                  <div className="flex justify-between p-3">
                    <p>Rent:</p>
                    {formatCurrency(property.price / 12)}
                  </div>
                  <div className="flex justify-between p-3">
                    <p>Selected Plan:</p>
                    {formatCurrency(plans)}
                  </div>
                  <div className="flex justify-between p-3">
                    <p>Total:</p>
                    ---
                    {/* {formatCurrency(plans)} */}
                  </div>
                </div>

                <Button className='mt-10' color='black' onClick={scheduleInspections} >Continue and Schedule Inspection</Button>
              </>
            )
          }
        </>
      </Drawer>
    </>
  )
}

export default Plans;