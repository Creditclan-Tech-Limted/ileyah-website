import React from "react";
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
      <div className="pt-70 pb-3">
        <p className="font-bold text-3xl text-deep-blue">
          Welcome to Rent now, Pay later
        </p>
        <p className="text-cc-dark text-sm">
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
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div
                      onClick={() => onNext("renew-rent")}
                      data-wow-delay="0.1s"
                      className="bg-renew feature-box card1 mb-4 feature-box-rounded wow fadeInUp center-feature"
                    >
                      <div className="bob">
                        <img src="/assets/images/bob.svg" alt="" />
                      </div>
                      <div>
                        <h2 className="text-left text-white mt-3 font-30">
                          Renew rent
                        </h2>
                        <p style={{lineHeight: "1.3"}} className="font-17 text-left text-white m-0">
                          Renew your house rent on a monthly basis while we
                          handle the full payment
                        </p>
                      </div>
                      <div className="go-corner bg-cc">
                        <div className="go-arrow">→</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onClick={() => onNext("found-house")}
                      data-wow-delay="0.1s"
                      className="bg-found-house feature-box card1 mb-4 feature-box-rounded wow fadeInUp center-feature"
                    >
                      <div className="bob">
                        <img src="/assets/images/bob.svg" alt="" />
                      </div>
                      <div>
                        <h5 className="font-30 text-left text-white mt-3">
                          I have found a house
                        </h5>
                        <p style={{ lineHeight: "1.3" }} className="font-17 text-left text-white m-0">
                          Let us pay for the house you have found and you can
                          move in immediately
                        </p>
                      </div>
                      <div className="go-corner bg-cc">
                        <div className="go-arrow">→</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onClick={() => onNext("find-house")}
                      data-wow-delay="0.1s"
                      className="bg-find-house feature-box card1 mb-4 feature-box-rounded wow fadeInUp center-feature"
                    >
                      <div className="bob">
                        <img src="/assets/images/bob.svg" alt="" />
                      </div>
                      <div>
                        <h5 className="font-30 text-left text-white mt-3">
                          Find me a house
                        </h5>
                        <p style={{ lineHeight: "1.3" }} className="font-17 text-left text-white m-0">
                          Let us find you a house that suits your preference
                        </p>
                      </div>
                      <div className="go-corner bg-cc">
                        <div className="go-arrow">→</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="pb-3 flex items-center justify-between">
        <p className="redirect-text font-17 text-cc-dark mb-1">
          Already have a rent request ?
        </p>
        <button
          onClick={() => onNext("user-details")}
          className="font-17 flex call-number btn btn-grey"
        >
          Check request
        </button>
      </div>
    </>
  );
}

export default MenuView;
