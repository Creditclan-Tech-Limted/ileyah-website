"use client";
// import Navbar from '@/app/listings/components/Navbar'
import ScrollToTop from "@/components/ScrollToTop";
import Button from "@/components/global/Button";
import ListingFlex from "@/components/listings/ListingFlex";
import ProDetails from "@/components/listings/modals/property_details";
import { IconChevronRight, IconHome2 } from "@tabler/icons-react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import Typed from "typed.js";
import Navbar from "./components/Navbar";

const Page = () => {
  const router = useRouter();
  const query = usePathname();
  const [listings, setListings] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [current, setCurrent] = useState();
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);
  const el = useRef(null);
  const [loading, setLoading] = useState(true);

  useIsomorphicLayoutEffect(() => {
    if (isMobileNavVisible)
      document.scrollingElement.style.overflowY = "hidden";
    else document.scrollingElement.style.overflowY = "initial";
  }, [isMobileNavVisible]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    setScrolled(scrollTop > 50);
  };

  const getHouses = async () => {
    try {
      const res = await axios.post(
        "https://kuda-creditclan-api.herokuapp.com/agents/getAllFoundHouse",
        {
          request_id: query.split("/")[2],
        }
      );
      let property = res?.data?.properties.map((item) => {
        const parsedImages = JSON.parse(item.image);
        return { ...item, image: parsedImages };
      });
      setListings({ property, owner: res?.data?.owner });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['Monthly', 'Weekly'],
  //     typeSpeed: 100,
  //     backSpeed: 10,
  //     backDelay: 2000,
  //     loop: true,
  //     showCursor: false
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="bg-gray-100">
        <ScrollToTop />
        <Navbar name={listings?.owner?.landlordAgent?.name} />
        <div className="container">
          {loading &&
            [1, 2, 3].map((m, i) => (
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mt-5"
                key={i}
              >
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ))}
          {!loading && (
            <div className={`grid grid-cols-[1fr_350px] gap-10 mt-10`}>
              <div className="">
                {listings?.property?.map((m, i) => (
                  <div key={i}>
                    <ListingFlex
                      key={i}
                      index={i}
                      houseImg={m.image}
                      heading="For Rent"
                      price={m?.price}
                      title={m?.description}
                      name="Jonathan Reinink"
                      role="Estate Agents"
                      location={m?.address}
                      lengthNum="3450"
                      bedNum={m?.bed || "2"}
                      bathNum={m?.bath || "2"}
                      bed="Bed"
                      bath="Bath"
                      length="Square Ft"
                      property={m}
                      onClick={() => {
                        setCurrent(m);
                        setOpenPropertyDetails(true);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <div className="hidden md:block">
                  <div className="bg-blue-600 rounded-xl p-4 inline-flex w-full">
                    <IconHome2 color="white" />
                    <p className="text-white mx-5">
                      Claim Your <span className="font-bold">SIGNUP</span> Bonus{" "}
                    </p>
                  </div>
                  <div className="mt-3 bg-white shadow rounded-lg pl-10 pr-10 pt-10 text-xl h-[350px] relative border">
                    <p className="text-4xl font-medium">
                      Experience peace. Pay your rent Monthly{" "}
                      <span className="text-primary-600" /> forever.{" "}
                      {/* Experience peace. Pay your rent Monthly <span className="text-primary-600" ref={el} /> forever.{' '} */}
                    </p>
                    <img
                      src="/assets/images/house-svg.png"
                      alt="Image"
                      className="absolute bottom-0 right-0 w-32 h-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ProDetails
        isOpen={openPropertyDetails}
        onClose={() => setOpenPropertyDetails(false)}
        property={current}
      />
    </>
  );
};

export default Page;
