"use client";
import PostRequest from "@/app/listings/modals/PostRequest";
import WeCall from "@/components/WeCall";
import Button from "@/components/global/Button";
import SuscriptionStandAlone from "@/components/listings/SubStandAlone/SuscriptionStandAlone";
import useSignupStore from "@/store/signup";
import {
  IconChevronRight,
  IconHeadset,
  IconHome2,
  IconHomeHand,
  IconHomeSearch,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [openWeCall, setOpenWeCall] = useState(false);
  const [openPostRequest, setOpenPostRequest] = useState(false);
  const [openViewSub, setOpenViewSub] = useState(false);

  return (
    <>
      <div className="flex">
        <div>
          <p className="text-2xl">
            Welcome{" "}
            <span className="font-semibold">
              {data?.user?.name || "Praise"}
            </span>{" "}
            🥳
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-[50px] mt-10">
        <div className="mt-3 space-y-8">
          <div className="bg-blue-200 px-6 py-4 border rounded-2xl mb-5">
            <p className="text-2xl font-bold">Pending Request</p>
            <p className="mt-1">
              Heeeeey! Your Company Ileyah hq has sent you a request as regard
              your renting experience{" "}
            </p>
            <Button
              color="black"
              className="mt-10"
              onClick={() => setOpenPostRequest(true)}
            >
              Continue Application
            </Button>
          </div>
          <Link href={"/dashboard/listings"}>
            <div className="rounded-2xl flex items-start  border px-7 py-7 cursor-pointer hover:bg-gray-100 shadow">
              <div className="text-red-600 grid place-items-center mt-1">
                <IconHomeSearch size="32" />
              </div>
              <div className="px-6">
                <p className="text-lg font-medium text-left">Browse Listings</p>
                <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                  Renew your house rent on a monthly basis while we handle the
                  full payment
                </p>
              </div>
              <div className="my-auto ml-auto">
                <IconChevronRight className="text-black" size="20" />
              </div>
            </div>
          </Link>
          <div
            className="rounded-2xl flex items-start  border px-7 py-7 cursor-pointer hover:bg-gray-100 shadow"
            onClick={null}
          >
            <div className="text-blue-600 grid place-items-center mt-1">
              <IconHomeHand size="32" />
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">I found a house</p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the
                full payment
              </p>
            </div>
            <div className="my-auto ml-auto">
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
          <div
            className="rounded-2xl flex items-start border px-7 py-7 cursor-pointer hover:bg-gray-100 shadow"
            onClick={() => {
              setOpenWeCall(true);
            }}
          >
            <div className="text-green-600 grid place-items-center mt-1">
              <IconHeadset size="32" />
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">Talk to Advisor</p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the
                full payment
              </p>
            </div>
            <div className="my-auto ml-auto">
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-blue-600 rounded-xl p-4 inline-flex w-full">
            <IconHome2 color="white" />
            <p className="text-white mx-5">
              Claim Your <span className="font-bold">SIGNUP</span> Bonus{" "}
            </p>
          </div>
          <div className="mt-3 bg-[#F0F3FA] shadow rounded-lg pl-10 pr-10 pt-10 text-xl h-[350px] relative">
            <p className="text-4xl font-medium">
              Whomsoever finds a Good House, <br />{" "}
              <span className="text-2xl">Finds a Good Thing</span>.{" "}
            </p>
            <div className="flex mt-10 font-bold">
              <Button
                className="inline-flex"
                variant="outlined"
                color="blue"
                size="sm"
                rightIcon={<IconChevronRight size={15} />}
                onClick={() => setOpenViewSub(true)}
              >
                View Subscriptions{" "}
              </Button>
            </div>
            <img
              src="/assets/images/house-svg.png"
              alt="Image"
              className="absolute bottom-0 right-0 w-32 h-32"
            />
          </div>
        </div>
      </div>

      <WeCall isOpen={openWeCall} onClose={() => setOpenWeCall(false)} />
      <PostRequest
        isOpen={openPostRequest}
        onClose={() => setOpenPostRequest(false)}
      />
      <SuscriptionStandAlone
        isOpen={openViewSub}
        onClose={() => setOpenViewSub(false)}
      />
    </>
  );
};

export default Page;