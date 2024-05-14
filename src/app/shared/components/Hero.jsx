import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { locations, rentType, type } from "@/lib/utils";
import Filters from "./Filters";
register();

const Hero = () => {
  const ref = useRef(null);
  return (
    <div>
      <div className="bg-gray-900">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-12 gap-8 pt-24 pb-32 w-full">
            <div className="col-span-4">
              <h1 className="max-w-2xl mb-4 text-6xl md:text-5xl xl:text-[6.5rem] font-extrabold tracking-tight text-white leading-10 flex my-auto">
                Your <br /> home <br /> ileyah's priorities <br />
              </h1>
              <p className="max-w-xl font-light text-xl text-gray-300 mt-4 md:text-lg text-primary">
                We are helping millions of tenants pay their rent in easy,
                monthly subscriptions across Africa.
              </p>
              <Button
                className="mt-5"
                rightIcon={<IconChevronRight size={15} />}
              >
                Get Started
              </Button>
            </div>

            <div className="col-span-8 ml-10">
              <motion.div
                ref={ref}
                className="grid grid-cols-2 xl:grid-cols-3 gap-4"
              >
                <div className="flex flex-col gap-4 justify-center">
                  <motion.div className="h-[100px] bg-[#282A30] rounded p-4">
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Tobi Daramola
                    </p>
                    <div className="space-y-2 my-2">
                      <div className="w-[100px] bg-[#1C1D22] h-[15px]"></div>
                      <div className="hidden md:block xl:w-full bg-[#1C1D22] h-[15px]"></div>
                    </div>
                  </motion.div>
                  <div className="h-[150px] bg-[#282A30] rounded p-4">
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      John Doe
                    </p>
                    <div className="my-4 grid grid-cols-3 gap-4">
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                      <div className="bg-[#1C1D22] h-[15px]"></div>
                    </div>
                  </div>
                  <motion.div className="h-[150px] flex justify-end">
                    <div className="w-[60%] bg-[#282A30] rounded p-4">
                      <p className="md:text-[17px] text-[16px] font-extralight text-gray-200 leading-[1.1]">
                        Ashley White 
                      </p>
                      <div className="relative w-full my-2">
                        <input
                          className="pointer-events-none w-full outline-none ease transition-all py-1 px-4 text-sm rounded bg-[#1C1D22] text-black pl-11"
                          value=""
                        />
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          version="1.1"
                          id="search"
                          x="0px"
                          y="0px"
                          viewBox="0 0 24 24"
                          className="absolute top-1.5 left-2 fill-gray-400"
                          height="15px"
                          width="15px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="my-4 grid grid-cols-2 gap-4">
                        <div className="bg-[#1C1D22] h-[15px]"></div>
                        <div className="bg-[#1C1D22] h-[15px]"></div>
                        <div className="bg-[#1C1D22] h-[15px] col-span-2"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <div className="h-[100px] bg-[#282A30] rounded p-4">
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Chinyere Adams
                    </p>
                    <div className="space-y-2 my-2">
                      <div className="w-[100px] bg-[#1C1D22] h-[15px]"></div>
                      <div className="xl:w-full bg-[#1C1D22] h-[15px]"></div>
                    </div>
                  </div>
                  <div className="xl:h-[250px] bg-[#282A30] rounded py-4 xl:py-0">
                    <div className="flex text-white p-5 space-x-3">
                      <div>
                        <img
                          src="/assets/images/05.jpg"
                          alt=""
                          className="h-14 w-14 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Ileyah Property 12</p>
                        <p className="text-xs italics">Lekki 1, Lagos</p>
                      </div>
                    </div>
                    <hr className="w-full h-2" />
                    <div className="p-5 text-white">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs">Location</p>
                          <p>Lekki</p>
                        </div>
                        <div>
                          <div className="text-xs">Beds</div>
                          <div>4</div>
                        </div>
                        <div>
                          <div className="text-xs">Rent</div>
                          <div>Monthly</div>
                        </div>
                      </div>
                    </div>
                    {/* <Travel /> */}
                  </div>
                  <div className="h-[120px] bg-[#282A30] rounded p-4">
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Tolu Omidiya
                    </p>
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Abubakar Mustapha
                    </p>
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Peace Chisom
                    </p>
                    {/* <div className="my-2 grid grid-cols-3 md:grid-cols-6 gap-2">
                      <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
                      <div className="w-[30px] h-[30px] rounded-full bg-red-300"></div>
                      <div className="w-[30px] h-[30px] rounded-full bg-purple-300"></div>
                      <div className="hidden xl:block w-[30px] h-[30px] rounded-full bg-green-300"></div>
                      <div className="hidden xl:block w-[30px] h-[30px] rounded-full bg-black"></div>
                      <div className="hidden xl:block w-[30px] h-[30px] rounded-full bg-yellow-300"></div>
                    </div> */}
                  </div>
                </div>
                <div className="hidden xl:flex flex-col gap-4 justify-center">
                  <motion.div className="h-[180px] w-[100%] bg-[#282A30] rounded p-4">
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Chief Femi Ade
                    </p>
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Mr. Lorem Ipsum
                    </p>
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Mr. Lorem Ipsum
                    </p>
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Mr. Lorem Ipsum
                    </p>
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Mr. Lorem Ipsum
                    </p>
                  </motion.div>
                  <div className="h-[160px] w-[100%] bg-[#282A30] rounded p-4">
                    <p className="md:text-[17px] text-[16px] font-extralight text-gray-200">
                      Vacant Space
                    </p>
                    <div className="grid grid-cols-2 gap-2 my-4">
                      <div className="bg-[#1C1D22] rounded-lg p-2 flex items-center">
                        <img
                          src="/images/showmax.svg"
                          className="ride-logo w-full"
                          alt="logo"
                        />
                      </div>
                      <div className="bg-[#1C1D22] rounded-lg p-2 flex items-center">
                        <img
                          src="/images/prime-video.svg"
                          className="ride-logo w-full"
                          alt="logo"
                        />
                      </div>
                      <div className="col-span-2 h-[50px] bg-[#1C1D22] rounded-lg flex justify-center items-center">
                        <img
                          src="/images/netflix.svg"
                          className="ride-logo w-[90px]"
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bg-white shadow-xl py-4 px-6 -bottom-[60px] rounded-xl w-full flex justify-between">
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
