import Navbar from "@/components/Navbar";
import { IconMapPinBolt } from "@tabler/icons-react";
import React from "react";
import Filters from "../components/Filters";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Flatmates = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container mx-auto mt-[150px]">
        <div className="border p-5 rounded-lg shadow">
          <Filters />
        </div>
        <div className="grid grid-cols-2 gap-10 my-10">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item}>
              <div
                className="border border-gray-200 bg-white rounded-lg transition duration-200 relative transform md:hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-40 lg:h-36 flex ">
                  <figure className="bg-gray-100 relative w-1/2 h-full lg:w-1/3 grow-0 rounded-tl-[5px] rounded-br-none rounded-tr-none rounded-bl-none overflow-hidden">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="Anshi Searching Flatmate in Mumbai, Maharashtra, India"
                        sizes="100vw"
                        src="https://www.flatmate.in/_next/image?url=https%3A%2F%2Fwww.flatmate.in%2Fapi%2Franbasera%2Fapp%2Fimages%2Fusers%2F2024050292264187583%2F2024050292264187583.jpg&w=3840&q=75"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover box-border block overflow-hidden [width:initial] [height:initial] bg-none opacity-100 border-[0px] m-0 p-0 absolute"
                      />
                    </span>
                  </figure>
                  <div className="text-wrapper py-3 px-5 relative h-full w-full flex flex-col justify-start items-start gap-0.5 border-b border-dashed border-gray-300 overflow-hidden">
                    <div className="flex items-center space-x-1">
                      <p className="text:text-base truncate max-w-[170px] md:text-lg text-gray-600 font-medium">
                        John Doe
                      </p>
                    </div>
                    <div className="location flex items-start gap-1 text-xs lg:text-sm text-gray-500 -ml-1 pb-4">
                      <span className="box-border inline-block overflow-hidden [width:initial] [height:initial] bg-none opacity-100 border-[0px] m-0 p-0 relative max-w-full">
                        <span className="box-border block [width:initial] [height:initial] bg-none opacity-100 border-[0px] m-0 p-0 max-w-full">
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                            className="block max-w-full [width:initial] [height:initial] bg-none opacity-100 border-[0px] m-0 p-0"
                          />
                        </span>
                      </span>
                      <p className="text-xs truncate w-40 sm:w-80 md:w-40 lg:w-80 flex space-x-3">
                        <IconMapPinBolt size={15} className="mt-2" />
                        <p>Simple Bio here</p>
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start gap-1.5 lg:gap-0 text-xs lg:text-sm text-gray-600 font-medium lg:pb-4 w-full">
                      <p className="w-full lg:w-auto lg:pr-6 xl:pr-10 flex lg:flex-col gap-1">
                        <span className="font-medium lg:order-2 text-sm whitespace-nowrap flex items-center space-x-1">
                          <p>32</p>
                          <p className="text-xs text-gray-500 font-light lg:hidden">
                            Age
                          </p>
                        </span>
                        <span className="text-gray-500 text-xs font-light hidden lg:block">
                          Age
                        </span>
                      </p>
                      <div className="pt-2 lg:pt-0 looking-for w-full flex items-center justify-between gap-1 lg:w-auto">
                        <p className="flex flex-col border-none font-medium lg:px-6 xl:px-10 lg:border-r lg:border-l border-gray-300">
                          <span className="text-gray-500 text-xs font-light whitespace-nowrap ">
                            Gender
                          </span>
                          <span className="mt-1">Female</span>
                        </p>
                        <p className="flex flex-col font-medium lg:pl-6 xl:pl-10">
                          <span className="text-gray-500 text-xs font-light whitespace-nowrap ">
                            Occupation
                          </span>
                          <span className="mt-1">Software engineer</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 items-center justify-between w-full text-xs px-3 h-12">
                  <p className="font-medium text-gray-600 text-[0.7rem] md:text-xs">
                    0 km{" "}
                    <span className="text-gray-500 font-light">
                      {" "}
                      from your search
                    </span>
                  </p>
                  <div className="flex items-center gap-2 z-10">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex justify-center items-center ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="w-4 text-gray-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z"
                        ></path>
                        <circle cx="160" cy="256" r="32"></circle>
                        <circle cx="256" cy="256" r="32"></circle>
                        <circle cx="352" cy="256" r="32"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Flatmates;
