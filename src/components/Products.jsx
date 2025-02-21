import {
  IconHeadset,
  IconHomeSearch,
  IconListSearch,
  IconRotate2,
} from "@tabler/icons-react";
import Button from "./global/Button";
import useGlobalStore from "@/store/global";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import FlatShareLanding from "@/app/dashboard/modals/FlatShareLandingModal";

const Products = ({ call }) => {
  const toggleIsSignupOpen = useGlobalStore(
    (state) => state.toggleIsSignupOpen
  );
  const el = useRef(null);
  const [openFlatShareModal, setOpenFlatShareModal] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Monthly Subscription", "Yearly Subscription"],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="mt-[600px] md:mt-0 py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          <h2 className="max-w-4xl text-5xl font-bold md:text-6xl">
            Experience peace. Pay your rent in{" "}
            <span className="text-primary-500" ref={el} /> forever.
          </h2>
          <div className="grid gap-8 mt-16 md:grid-cols-3">
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-blue-500 rounded-full">
                  <IconListSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Browse Listings</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Let's connect you with 10,000+ agents and landlords who fastrack
                your monthly tenancy.
              </p>
              <Link href="/listings">
                <Button className="mt-8" variant="outlined" color="white">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
                  <IconRotate2 size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Short Let</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Rent due in a few days? We help you convert your current yearly
                tenancy into monthly tenancy forever.
              </p>
              <Button
                className="mt-8"
                onClick={toggleIsSignupOpen}
                variant="outlined"
                color="white"
              >
                Get started
              </Button>
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-green-500 rounded-full">
                  <IconHomeSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Flat share</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Whether you're new to the city or looking to make new
                connections, ILEYAH help you find the perfect living arrangement
              </p>
              <Button
                className="mt-8"
                onClick={() => setOpenFlatShareModal(true)}
                variant="outlined"
                color="white"
              >
                Get started
              </Button>
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-yellow-500 rounded-full">
                  <IconHeadset size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Talk to an advisor</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Initiate a conversation with our dedicated support to further
                help you in the process
              </p>
              <Button
                className="mt-8"
                onClick={call}
                variant="outlined"
                color="white"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FlatShareLanding
        setOpenFlatShareModal={setOpenFlatShareModal}
        setToggleModal={setToggleModal}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Products;
