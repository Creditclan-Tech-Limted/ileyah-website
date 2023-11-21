import Drawer from "@/components/Drawer"
import Button from "@/components/global/Button";
import { useToast } from "@/lib/use-toast";
import { HousesData } from "@/utils/houseData";
import { IconBath, IconBulb, IconBus, IconCheck, IconHeart, IconPaint, IconPalette, IconPlus, IconStar, IconTriangleInverted, IconX } from "@tabler/icons-react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import Collapsible from "@/components/global/Collapsible";
import useSignupStore from "@/store/signup";
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

const Plans = ({ isOpen, onClose, property, onNext }) => {
  const array = [];
  const toast = useToast();
  const router = useRouter();
  const [plans, setPlans] = useState()
  const [views, setViews] = useState('plans')
  const { data, updateData } = useSignupStore((state) => state);


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
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      if (ileyah_token) {
        // if (data?.user?.credit_score) {
        updateData({ user: ileyah_token, property });
        return onNext();
        // }
        // return router.push(`/dashboard`);
      } else {
        return router.push(`/register`)
      }
    } catch (error) {
      console.log({ error });
    }
  }

  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   const swiperParams = {
  //     speed: 10000,
  //     spaceBetween: 20,
  //     slidesPerView: 1.7
  //   };
  //   Object?.assign(swiperElRef.current, swiperParams);
  //   swiperElRef.current.initialize();
  // }, []);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Choose your plan' smLonger={true}>

        <>
          {
            views === 'plans' && (
              <>
                <p>Your Monthly Repayment is <span className="font-bold">{formatCurrency(property.price / 12)}</span> /mo</p>
                <p className="mb-5">Please select plan a subscription services</p>
                <div className="border border-slate-300 rounded-xl">
                  <Collapsible
                    defaultIsOpen={true}
                    header={(
                      <h5 className="md:text-lg font-medium inline-flex">
                        {/* <span className="w-12 h-10 rounded-full text-white grid place-items-center my-auto bg-primary-600">
                          <IconBus size={20} />
                        </span> */}
                        <div className="my-auto font-bold">
                          <span>
                            Move in Service
                          </span>
                          {/* <p className="opacity-75 text-[.95rem] leading-snug">
                            - Simplify Your Move-In Experience <br />
                            - Seamless Transitions to Your New Home Await.
                          </p> */}
                        </div>
                      </h5>
                    )}
                    content={(
                      <div className="opacity-80 pb-6 px-6">
                        <swiper-container slides-per-view='1.7' space-between='20' >
                          <swiper-slide>
                            <div className="flex">
                              <div className="border-gray-200 border bg-gray-100 shadow rounded-2xl my-auto p-10 space-y-3 h-full">
                                <IconHeart size={26} className="bg-gray-200 p-1 rounded-full" />
                                <p className="font-bold">Basic</p>
                                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet elit. Asperiores, deleniti!</p>
                                <p className="text-4xl font-bold">5,000</p>
                                <p className="font-bold text-sm">No Subscription</p>
                                <div className="mt-auto">
                                  <Button block className='mt-10' onClick={() => {
                                    setPlans(5000);
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
                                <p className="text-4xl font-bold">10,000</p>
                                <p className="font-bold text-sm">What's included:</p>
                                <div className="text-white">
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p>
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p>
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
                                <div>
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p>
                                  <p className="inline-flex">
                                    <IconX size={15} color="gray" className="bg-gray-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm line-through">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconX size={15} color="gray" className="bg-gray-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm line-through">Lorem Ipsum Dolor</span>
                                  </p> <br />
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
                                <div className="text-white">
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p>
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
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
                                <p className="text-4xl font-bold">100,000</p>
                                <p className="font-bold text-sm">What's included:</p>
                                <div>
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconCheck size={15} color="green" className="bg-green-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm">Lorem Ipsum Dolor</span>
                                  </p>
                                  <p className="inline-flex">
                                    <IconX size={15} color="gray" className="bg-gray-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm line-through">Lorem Ipsum Dolor</span>
                                  </p> <br />
                                  <p className="inline-flex">
                                    <IconX size={15} color="gray" className="bg-gray-200 p-1 rounded-full mt-1 mr-3" /> <span className="text-sm line-through">Lorem Ipsum Dolor</span>
                                  </p> <br />
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
            views === 'details' && (
              <>
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