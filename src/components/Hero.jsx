import useGlobalStore from "@/store/global";
import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/global/Button";

const Hero = () => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);

  return (
    <>
      <section className="bg-white font-nunito">
        <div className="container">
          <div
            className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 pt-36 pb-20"
          >
            <div className="mr-auto place-self-center lg:col-span-6 pt-24 pb-32">
              <h1
                className="max-w-2xl mb-4 text-5xl md:text-5xl xl:text-[5.5rem] font-extrabold tracking-tight text-black">
                Providing <br/> <span className="text-primary-500">freedom to tenants</span> <br/> across Africa
              </h1>
              <p className="max-w-xl font-light text-xl text-gray-500 mt-4 md:text-lg text-primary">
              We are helping millions of tenants pay their rent in easy, monthly instalment across Africa.
              </p>
              <Button onClick={ toggleIsSignupOpen } rightIcon={ <IconArrowRight/> } size="lg" className="mt-12">
                Get started
              </Button>
            </div>
            <div className="col-span-6 hidden lg:block">
              <div className="relative">
                <div className="absolute h-[300px] w-[300px] bg-[#F4BD68] rounded-full left-[7rem]">
                  <div
                    className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#02163B] after:top-[4rem] after:border-2 after:border-white rotate'
                  />
                </div>
                <div className="absolute h-[300px] w-[300px] bg-[#EE6C4C] rounded-full right-[3rem] top-[10rem]">
                  <div
                    className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#F4BD68] after:top-[4rem] after:border-2 after:border-white rotate animation-duration-8'
                  />
                </div>
                <div className="absolute h-[150px] w-[150px] bg-[#02163B] rounded-full top-[27rem] right-[18rem]">
                  <div
                    className='relative h-[150px] w-[150px] rounded-full after:content-[""] after:absolute after:h-[25px] after:w-[25px] after:rounded-full after:bg-[#ED6B49] after:top-[6rem] after:border-2 after:border-white rotate animation-delay-3'
                  />
                </div>
                <div className="z-20 relative">
                  <div
                    className="absolute bg-gray-50 w-[300px] rounded-lg top-[3rem] right-[7rem] shadow-md p-4 bounce">
                    <div className="relative pb-6">
                      <svg
                        className="w-[10px]"
                        fill="#333"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                      >
                        <path
                          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                      </svg>
                      <div className="py-6">
                        <p className="text-base md:text-lg text-gray-600 font-bold">
                          Houses for rent
                        </p>
                        <p className="md:text-sm text-gray-600 pb-2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>
                      <div className="relative">
                        <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card">
                          <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt=""/>
                          <div className="flex mt-4 items-center">
                            <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/1.png" alt=""/>
                            <div className="ml-4 text-left">
                              <p className="md:text-lg text-gray-600 font-bold">
                                Bukunmi Dimeji.
                              </p>
                              <p className="md:text-sm text-gray-600">
                                <span><i className="fa-solid fa-location-dot mr-1"></i></span> Gbagada, Lagos
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="beds mr-3">
                                  <span className="h-8"><i className="fa-solid fa-bed mr-1"></i></span>
                                  3
                                </div>
                                <div className="bathrooms mr-3">
                                  <i className="fa-solid fa-bath mr-1"></i>
                                  2
                                </div>
                                <div className="toilets mr-3">
                                  <i className="fa-solid fa-toilet mr-1"></i>
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-two">
                          <div className="relative">
                            <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt=""/>
                            <div className="flex mt-4 items-center">
                              <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/2.png" alt=""/>
                              <div className="ml-4 text-left">
                                <p className="md:text-lg text-gray-600 font-bold">
                                  Ayodele Olaitan
                                </p>
                                <p className="md:text-sm text-gray-600">
                                  <span><i className="fa-solid fa-location-dot mr-1"></i></span> Gbagada, Lagos
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="beds mr-3">
                                    <span className="h-8"><i className="fa-solid fa-bed mr-1"></i></span>
                                    4
                                  </div>
                                  <div className="bathrooms mr-3">
                                    <i className="fa-solid fa-bath mr-1"></i>
                                    3
                                  </div>
                                  <div className="toilets mr-3">
                                    <i className="fa-solid fa-toilet mr-1"></i>
                                    4
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-three">
                          <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt=""/>
                          <div className="flex mt-4 items-center">
                            <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/3.png" alt=""/>
                            <div className="ml-4 text-left">
                              <p className="md:text-lg text-gray-600 font-bold">
                                Michael Agu
                              </p>
                              <p className="md:text-sm text-gray-600">
                                <span><i className="fa-solid fa-location-dot mr-1"></i></span> Gbagada, Lagos
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="beds mr-3">
                                  <span className="h-8"><i className="fa-solid fa-bed mr-1"></i></span>
                                  2
                                </div>
                                <div className="bathrooms mr-3">
                                  <i className="fa-solid fa-bath mr-1"></i>
                                  1
                                </div>
                                <div className="toilets mr-3">
                                  <i className="fa-solid fa-toilet mr-1"></i>
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-four">
                          <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt=""/>
                          <div className="flex mt-4 items-center">
                            <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/4.png" alt=""/>
                            <div className="ml-4 text-left">
                              <p className="md:text-lg text-gray-600 font-bold">
                                Mary Omalicha
                              </p>
                              <p className="md:text-sm text-gray-600">
                                <span><i className="fa-solid fa-location-dot mr-1"></i></span> Gbagada, Lagos
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="beds mr-3">
                                  <span className="h-8"><i className="fa-solid fa-bed mr-1"></i></span>
                                  3
                                </div>
                                <div className="bathrooms mr-3">
                                  <i className="fa-solid fa-bath mr-1"></i>
                                  2
                                </div>
                                <div className="toilets mr-3">
                                  <i className="fa-solid fa-toilet mr-1"></i>
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
