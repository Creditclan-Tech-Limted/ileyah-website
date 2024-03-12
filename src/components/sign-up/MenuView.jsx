import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  IconChevronRight,
  IconHeadset,
  IconHomeSearch,
  IconListSearch,
} from "@tabler/icons-react";
import Link from "next/link";
import WeCall from "../WeCall";
import { useState } from "react";

function MenuView({ onNext, handleToggle }) {
  const [openCall, setOpenCall] = useState(false);
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
      <div className="pt-70">
        <p className="font-bold text-3xl text-deep-blue leading-[1.1]">
          Pay your rent in monthly subscriptions forever.
        </p>
        <p className="text-cc-dark mt-2">
          Please choose a rent now pay later option
        </p>
      </div>
      <div className="space-y-4 mt-10">
        <Link href="/listings">
          <div className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center">
                <IconListSearch size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Browse Rental Listings across your region
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Browse 1000+ subscription tenancy
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
        </Link>
        <div
          onClick={() => setOpenCall(true)}
          className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center">
              <IconHomeSearch size="20" />
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">Find me a House</p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
              Can't find your exact requirements in our listings? Don't worry,
              post a request and we'll try to find it for you{" "}
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20" />
          </div>
        </div>
        <div
          className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          onClick={() => setOpenCall(true)}
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-green-600 text-white grid place-items-center">
              <IconHeadset size="20" />
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">Talk to an advisor</p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
              Renew your house rent on a monthly basis while we handle the full
              payment
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20" />
          </div>
        </div>
        {/* <div
          className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          onClick={() => setOpenCall(true)}
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-black text-white grid place-items-center">
              <IconHomeSearch size="20" />
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">Secure your Shop</p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
            Secure your ideal shop location with Ileyah. ILEYAH is here to help you get a shop of your choice.
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20" />
          </div>
        </div> */}
      </div>

      <WeCall isOpen={openCall} onClose={() => setOpenCall(false)} />
    </>
  );
}

export default MenuView;