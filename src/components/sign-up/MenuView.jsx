import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MenuView({ onNext, handleToggle }) {
  return (
    <>
      <div className="position-relative">
        <button
          style={{ marginBottom: "0px" }}
          className="x sidebarCollapse"
          type="button"
          onClick={handleToggle}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-x"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-70 pb-8">
        <p className="font-bold text-3xl text-primary leading-[1.1]">
          Welcome to <br /> Rent now, Pay later
        </p>
        <p className="text-cc-dark text-[17px]">
          Please choose a rent now pay later option
        </p>
      </div>
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-3 col-xs-12">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={40}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                470: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                760: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
              }}
              className="showcase"
            >
              <div className="swiper-pagination"></div>
              <div className="swiper-container">
                <div className="swiper-wrapper pb-8">
                  <SwiperSlide>
                    <div
                      onClick={() => onNext("renew-rent")}
                      className="bg-primary min-h-[130px] min-w-full rounded-tl-[24px] rounded-tr-[24px] rounded-bl-lg rounded-br-lg mb-8">
                      <div className="p-6">
                        <p className="text-white text-2xl font-bold text-left">
                          Renew rent
                        </p>

                      </div>

                      <div
                        className="bg-white shadow min-h-[200px] min-w-full rounded-tl-[24px] rounded-tr-[24px] p-6 rounded-bl-lg rounded-br-lg text-left">
                        <p className="text-left md:text-black leading-[1.1] mb-4">
                          Renew your house rent on a monthly basis while we
                          handle the full payment
                        </p>
                        <button
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-transparent border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Start now
                          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </button>

                      </div>
                    </div>

                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onClick={() => onNext("found-house")}
                      className="bg-primary min-h-[130px] min-w-full rounded-tl-[24px] rounded-tr-[24px] rounded-bl-lg rounded-br-lg mb-8">
                      <div className="p-6">
                        <p className="text-white text-2xl font-bold text-left">
                          I found a house
                        </p>

                      </div>

                      <div
                        className="bg-white shadow h-[200px] min-w-full rounded-tl-[24px] rounded-tr-[24px] p-6 rounded-bl-lg rounded-br-lg text-left">
                        <p className="text-left md:text-black leading-[1.1] mb-4">
                          Renew your house rent on a monthly basis while we
                          handle the full payment
                        </p>
                        <button
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-transparent border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Start now
                          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onClick={() => onNext("find-house")}
                      className="bg-primary min-h-[130px] min-w-full rounded-tl-[24px] rounded-tr-[24px] rounded-bl-lg rounded-br-lg mb-8">
                      <div className="p-6">
                        <p className="text-white text-2xl font-bold text-left">
                          Find me a house
                        </p>

                      </div>

                      <div
                        className="bg-white shadow min-h-[200px] min-w-full rounded-tl-[24px] rounded-tr-[24px] p-6 rounded-bl-lg rounded-br-lg text-left">
                        <p className="text-left md:text-black leading-[1.1] mb-4">
                          Renew your house rent on a monthly basis while we
                          handle the full payment
                        </p>
                        <button
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-transparent border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Start now
                          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </button>

                      </div>

                    </div>

                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="pb-3 flex items-center justify-center">
        <div className='pb-3'>
          <p className="ml-2 text-[17px] font-medium cursor-pointer">
            Already have an account? <a onClick={() => onNext("user-details")} className='text-blue-500'>Check
              request</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuView;