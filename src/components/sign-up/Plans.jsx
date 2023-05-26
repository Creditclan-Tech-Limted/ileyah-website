import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetPlansQuery } from "@/api/rent";
import useSignupStore from "@/store/signup";
import { numberWithCommas } from "@/lib/utils";

function Plans({ onBack, onNext }) {
  const [readMore, setReadMore] = useState({ 0: false, 1: false, 2: false });
  const { data, updateData } = useSignupStore((state) => state);

  const { data: plans, isLoading: isPlansLoading } = useGetPlansQuery({
    price: data?.renew?.amount,
  });
  const toggleView = (id) => {
    setReadMore((v) => ({ ...v, [id]: !readMore[id] }));
  };

  const submit = (plan) => {
    updateData({ plan: plan });
    onNext();
  };

  return (
    <>
      <div>
        <button
          style={{ marginBottom: "0px" }}
          className="back"
          type="button"
          onClick={onBack}
          disabled={isPlansLoading}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      {isPlansLoading && (
        <>
          <br />
          <br />
          <br />
          <br />
          <div className="d-flex flex-column justify-content-center align-items-center text-center py-5">
            <div className="spinner-grow text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="font-17 mt-4">Please wait..</div>
          </div>
        </>
      )}
      {!isPlansLoading && (
        <>
          <div className="pt-70 pb-2">
            <p className="font-30 redirect-text text-deep-blue font-weight-bold">
              Repayment summary
            </p>
          </div>
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
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                }}
                className="showcase"
              >
                <div className="swiper-pagination"></div>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {plans.slice(0, 1)?.map((plan, i) => (
                      <SwiperSlide>
                        <div
                        style={{minHeight: "250px"}}
                          data-wow-delay="0.1s"
                          className="feature-box bg-black card1 mb-4 feature-box-rounded wow fadeInUp center-feature d-flex flex-column h-100"
                        >
                          <div className="plans-list d-flex h-100 flex-column flex-grow-1">
                            <h2 className="text-left text-white font-weight-bold mt-3 font-30 mb-0">
                              ₦{numberWithCommas(plan.monthly)}
                              <span className="font-17 text-white">/mo</span>
                            </h2>
                            <p className="font-17 text-left text-white m-0">
                              For {plan.duration} months
                            </p>
                          
                            <button
                              type="submit"
                              className="call-number btn btn-blue-full w-100 font-17 mt-auto"
                              onClick={onNext}
                            >
                              Proceed
                            </button>
                          </div>
                          <div className="go-corner">
                            <div className="go-arrow">→</div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Plans;
