import useGlobalStore from "@/store/global";

const Hero = () => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);

  return (
    <>
      <section class="bg-white font-nunito">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-[40px] pb-[70px] lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-6 pt-[100px]">
            <h1 class="max-w-2xl mb-4 text-7xl font-extrabold tracking-tight md:text-5xl xl:text-[3.5rem] text-black">
              Providing <br /> <span className="text-secondary">rent solutions</span> <br /> across Africa
            </h1>
            <p class="max-w-2xl mb-6 font-light text-xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-primary">Introducing flexible payment
              solutions in the real estate sector. Become a homeowner today</p>
            <a  onClick={toggleIsSignupOpen}
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg border border-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 cursor-pointer">
              Get started
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#"
              class="px-8 inline-flex items-center justify-center py-3 text-base font-medium text-center bg-secondary rounded-lg hover:bg-transparent hover:border-secondary hover:text-secondary text-white hover:border focus:ring-4 focus:ring-gray-100">
              See plans
            </a>
          </div>
          <div className="col-span-6 hidden lg:block">
            <div className="relative">
              <div className="absolute h-[300px] w-[300px] bg-[#F4BD68] rounded-full left-[7rem]">
                <div className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#02163B] after:top-[4rem] after:border-2 after:border-white rotate'></div>
              </div>
              <div className="absolute h-[300px] w-[300px] bg-[#EE6C4C] rounded-full right-[3rem] top-[10rem]">
                <div className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#F4BD68] after:top-[4rem] after:border-2 after:border-white rotate animation-duration-8'></div>
              </div>
              <div className="absolute h-[150px] w-[150px] bg-[#02163B] rounded-full top-[27rem] right-[18rem]">
                <div className='relative h-[150px] w-[150px] rounded-full after:content-[""] after:absolute after:h-[25px] after:w-[25px] after:rounded-full after:bg-[#ED6B49] after:top-[6rem] after:border-2 after:border-white rotate animation-delay-3'></div>
              </div>
              <div className="z-20 relative">
                <div className="absolute bg-gray-50 w-[300px] rounded-lg top-[3rem] right-[7rem] shadow-md p-4 bounce">
                  <div className="relative pb-6">
                    <svg
                      className="w-[10px]"
                      fill="#333"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
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
                        <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt="" />
                        <div className="flex mt-4 items-center">
                          <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/1.png" alt="" />
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
                          <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt="" />
                          <div className="flex mt-4 items-center">
                            <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/2.png" alt="" />
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
                        <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt="" />
                        <div className="flex mt-4 items-center">
                          <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/3.png" alt="" />
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
                        <img className="mx-auto rounded-lg" src="/assets/images/houses/1.jpg" alt="" />
                        <div className="flex mt-4 items-center">
                          <img className="w-[50px] h-[50px] rounded-lg" src="/assets/images/agents/4.png" alt="" />
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
      </section>
    </>
  )
}

export default Hero